const { url } = require('@utils/environment');

module.exports = (app, opts, done) => {
	app.get('/account/profile', (req, res) => {
		res.redirect(
			'https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d/oauth2/v2.0/authorize?client_id=59e4dd34-d403-4db5-b338-e7c352ecb630&redirect_uri='
			+ url + '/account/oauth-callback&scope=https://graph.microsoft.com/User.Read&response_type=code',
		);
	});
	done();
};