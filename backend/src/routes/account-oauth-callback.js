const axios = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('qs');
const jwtContrants = require('../constants/jwt.json');
const isDev = require('@utils/isDev');
const { axiosCatch } = require('@utils/catcher');
const User = require('@models/User');
const Photo = require('@models/Photo');

const admin = [
	'bhumjate.s',
	'apisit.mixko',
	'athippat.athip',
	'sirawit.cssit',
	'monthara.k',
	'kasemtan.kmutt',
	'patiphon.k',
];

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
							redirect_uri: (isDev ? 'http://localhost:8081' : 'https://helloxxii-api.cscc.cf') + '/account/oauth-callback',
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
						reject(axiosCatch(e));
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
					.catch((e) => reject(axiosCatch(e)));
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
					.catch((e) => reject(axiosCatch(e)));
			});
			
			// * Fetch saved user information from database (identify by `graph.mail`).
			const user = await User.getAll(graph.mail, { index: 'email' }).run();
			
			// * Check whether user is already exist in database or not.
			if (user.length === 0) {
				// * Create new User record, and fetch back generated id as `document.id`.
				const document = await User.save({
					name: graph.displayName,
					nickname: graph.displayName.split(' ')[0],
					email: graph.mail,
					usertype: 1,
				});
				
				// * Save Photo record from retrieved Graph profile photo, which store `id` same as recently created User record.
				await Photo.save({
					id: document.id,
					mime: mime,
					photo: thinky.r.binary(photo),
				});
				
				// * Sign JWT
				const token = jwt.sign(
					{
						id: document.id,
						name: graph.displayName,
						usertype: 1,
					},
					jwtContrants.secret,
					jwtContrants.options);
				
				res.send({
					success: true,
					token: token,
				});
			} else {
				// * Update profile photo for existing user from retrieved Graph profile photo.
				const record = await Photo.get(user[0].id).run();
				await record.merge({
					mime: mime,
					photo: thinky.r.binary(photo),
				}).save();
				
				// * Sign JWT from existing database record.
				const token = jwt.sign(
					{
						id: user[0].id,
						name: user[0].name,
						usertype: user[0].usertype,
					},
					jwtContrants.secret,
					jwtContrants.options);
				
				res.send({
					success: true,
					token: token,
				});
			}
		} catch (e) {
			if (e instanceof Error) {
				res.send({
					success: false,
					error: 3001,
					error_desc: e.message,
				});
			} else {
				res.send({
					success: false,
					...e,
				});
			}
		}
	});
	
	done();
};