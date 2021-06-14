const axios = require('axios');
const qs = require('qs');
const validator = require('validator');
const isDev = require('@utils/isDev');
const { axiosCatch } = require('@utils/catcher');
const User = require('@models/User');
const Photo = require('@models/Photo');
const jwt = require('jsonwebtoken');

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
	app.get('/account/oauth-callback', (req, res) => new Promise(async (send) => {
			try {
				// Retrieve `access_token` from code received from request
				const accessToken = await new Promise((resolve) => {
					axios.post(
						'https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d/oauth2/v2.0/token',
						qs.stringify({
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
							r.data.access_token || send({
								success: false,
								error: 3034,
								error_desc: 'Unable to get access_token from Microsoft OAuth service.',
							})))
						.catch((e) => send(axiosCatch(e)));
				});
				
				// Retrieve Microsoft Graph information
				const graph = await new Promise((resolve) => {
					axios.get(
						'https://graph.microsoft.com/beta/me/',
						{
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						})
						.then((r) => resolve(r.data))
						.catch((e) => send(axiosCatch(e)));
				});
				
				// Retrieve binary data of profile photo
				const [photo, mime] = await new Promise((resolve) => {
					axios.get(
						'https://graph.microsoft.com/beta/me/photo/$value',
						{
							responseType: 'arraybuffer',
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						})
						.then((r) => resolve([r.data, r.headers['content-type']]))
						.catch((e) => send(axiosCatch(e)));
				});
				
				// Fetch saved user information from database
				const user = await User.filter({ email: graph.mail }).run();
				if (user.length === 0) {
					// In case of user haven't registered yet.
					const document = await User.save({
						name: graph.displayName,
						nickname: graph.displayName.split(' ')[0],
						email: graph.mail,
						usertype: 1,
					});
					
					await Photo.save({
						id: document.id,
						mime: mime,
						photo: thinky.r.binary(photo),
					});
					
					const token = jwt.sign({
						id: document.id,
						name: graph.displayName,
						usertype: 1,
					}, 'HelloXXII-By-CS21-To-CS22-2021-Monterey-2zr!6@$WY9tV', { expiresIn: '3d' });
					
					send({
						success: true,
						token: token,
					});
				} else {
					// In case of user already been in the system.
					const token = jwt.sign({
						id: user[0].id,
						name: user[0].name,
						usertype: user[0].usertype,
					}, 'HelloXXII-By-CS21-To-CS22-2021-Monterey-2zr!6@$WY9tV', { expiresIn: '3d' });
					
					send({
						success: true,
						token: token,
					});
				}
				
				// Check for user type
				let userType = 1;
				if (admin.includes(graph.mail)) {
					userType = 3;
				} else if (graph.createdDateTime.substring(0, 4) === '2020') {
					userType = 2;
				}
				
			} catch (e) {
				res.send({
					success: false,
					error: 3001,
					error_desc: e.message,
				});
			}
		})
		.then((i) => res.send(i)),
	);
	
	done();
};