const axios = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('qs');
const jwtConstants = require('../constants/jwt.json');
const { dev, url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const User = require('@models/User');
const Photo = require('@models/Photo');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');

module.exports = (app, opts, done) => {
	app.get('/account/oauth-callback', async (req, res) => {
		try {
			// * Retrieve `access_token` from code received from request.
			const accessToken = await new Promise((resolve, reject) => {
				axios.post(
						'https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d/oauth2/v2.0/token',
						qs.stringify(
							{
								grant_type: 'authorization_code',
								code: req.query.code,
								redirect_uri: url + '/account/oauth-callback',
							}),
						{
							headers: {
								Authorization: 'Basic NTllNGRkMzQtZDQwMy00ZGI1LWIzMzgtZTdjMzUyZWNiNjMwOk14d1RJd0J6NC1lMnFQV2szfjF+TTlCWlRJeE5+RjlpcjA=',
							},
						})
					.then((r) => resolve(
						r.data.access_token || reject({
							error: 3034,
							error_desc: 'Unable to get access_token from Microsoft OAuth service.',
						})))
					.catch((e) => {
						if (e.response?.data?.error === 'invalid_grant') {
							reject({
								error: 4001,
								error_desc: 'Invalid Microsoft OAuth authorization code.',
							});
						}
						reject(axiosError(e));
					});
			});
			
			// * Retrieve Microsoft Graph information.
			const graph = await new Promise((resolve, reject) => {
				axios.get(
						'https://graph.microsoft.com/beta/me/',
						{
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						})
					.then((r) => resolve(r.data))
					.catch((e) => reject(axiosError(e)));
			});
			
			// * Retrieve Microsoft Graph profile photo (binary payload as arraybuffer `photo`, content type as string `mime`).
			const [photo, mime] = await new Promise((resolve, reject) => {
				axios.get(
						'https://graph.microsoft.com/beta/me/photo/$value',
						{
							responseType: 'arraybuffer',
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						})
					.then((r) => resolve([r.data, r.headers['content-type']]))
					.catch((e) => reject(axiosError(e)));
			});
			
			// * Fetch saved user information from database (identify by `graph.mail`).
			const users = await User.getAll(graph.mail, { index: 'email' }).run();
			
			// * Check whether user is already exist in database or not.
			if (users.length === 0) {
				// * Check whether user is insane candidate or not. If be a candidate, fetch back an insane document as `insane`.
				const senpai = await new Promise((resolve) => {
					Senpai.get(graph.mail).run()
						.then((senpai) => resolve(senpai))
						.catch(() => resolve(false));
				});
				
				// * Create new User record, and fetch back document which store generated id as `document.id`.
				const document = await User.save({
					name: graph.displayName,
					nickname: graph.displayName.split(' ')[0],
					email: graph.mail,
					usertype: senpai === false ? 1 : 2,
				});
				
				// * Save Photo record from retrieved Graph profile photo, which store `id` same as recently created User record.
				await Photo.save({
					id: document.id,
					mime: mime,
					photo: thinky.r.binary(photo),
				});
				
				if (senpai === false) {
					// Case of user is noob, not exist in insane candidate. Then, just create regular record.
					await Kohi.save({
						id: document.id,
						senpai: null,
					});
				} else {
					// Case of user is insane, create new insane record with the same data (`coline` field) but change id
					// to be uuid of the recently created user record. Then delete the candidate record.
					await Senpai.save({
						...senpai,
						id: document.id,
					});
					await senpai.delete();
				}
				
				// * Sign JWT
				const token = jwt.sign(
					{
						id: document.id,
						name: graph.displayName,
						usertype: document.usertype,
					},
					jwtConstants.secret,
					jwtConstants.options);
				
				res.cookie(
					'token',
					token,
					{
						domain: dev ? 'localhost' : 'helloxxii-api.cscc.cf',
						path: '/',
					});
			} else {
				// * Update profile photo for existing user from retrieved Graph profile photo.
				const document = await Photo.get(users[0].id).run();
				await document.merge({
						mime: mime,
						photo: thinky.r.binary(photo),
					})
					.save();
				
				// * Sign JWT from existing database record.
				const token = jwt.sign(
					{
						id: users[0].id,
						name: users[0].name,
						usertype: users[0].usertype,
					},
					jwtConstants.secret,
					jwtConstants.options);
				
				res.cookie(
					'token',
					token,
					{
						domain: dev ? 'localhost' : 'helloxxii-api.cscc.cf',
						path: '/',
					});
			}
			
			return res.redirect(dev ? 'http://localhost:8080/oauth-callback' : 'https://helloxxii.cscc.cf/oauth-callback');
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};