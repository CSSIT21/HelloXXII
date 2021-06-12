const isDev = require('@utils/isDev');

module.exports = (app, opts, done) => {
	app.get('/account/oauth-redirect', (req, res) => {
		res.redirect(
			'https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d/oauth2/v2.0/authorize?client_id=59e4dd34-d403-4db5-b338-e7c352ecb630&scope=https://graph.microsoft.com/User.Read&redirect_uri='
			+ (isDev ? 'http://localhost:8081' : 'https://helloxxii-api.cscc.cf') + '/account/oauth-callback&response_type=code',
		);
	});
	done();
};