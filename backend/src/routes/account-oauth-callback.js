const qs = require('qs');
const axios = require('axios');
const isDev = require('@utils/isDev');
const { axiosCatch } = require('@utils/catcher');

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
			const fetchToken = (await axios.post(
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
				})).data.access_token;
			
			const graph = await axios.get(
				'https://graph.microsoft.com/beta/me/',
				{
					headers: {
						Authorization: `Bearer ${fetchToken}`,
					},
				});
			
			let userType = 1;
			if (admin.includes(graph.data.mailNickname)) {
				userType = 3;
			} else if (graph.data.createdDateTime.substring(0, 4) === '2020') {
				userType = 2;
			}
			res.send({
				success: true,
				name: graph.data.displayName,
				usertype: userType,
				mail: graph.data.mail,
			});
		} catch (e) {
			if (e.isAxiosError) {
				return res.send(axiosCatch(e));
			}
			if (e instanceof TypeError) {
				return res.send({
					success: false,
					error: 3034,
					error_desc: e.message,
				});
			}
			res.send({
				success: false,
				error: 3001,
				error_desc: e.message,
			});
		}
	});
	
	done();
};