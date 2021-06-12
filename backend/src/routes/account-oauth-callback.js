const qs = require('qs')
const axios = require('axios')

module.exports = (app, opts, done) => {
	
	app.get('/account/oauth-callback', async (req, res) => {
		try {
			axios.defaults.headers = {
				Authorization : 'Basic NTllNGRkMzQtZDQwMy00ZGI1LWIzMzgtZTdjMzUyZWNiNjMwOk14d1RJd0J6NC1lMnFQV2szfjF+TTlCWlRJeE5+RjlpcjA='
			}
			const getToken = await axios.post("https://login.microsoftonline.com/6f4432dc-20d2-441d-b1db-ac3380ba633d/oauth2/v2.0/token",qs.stringify({
				grant_type : 'authorization_code',
				code : req.query.code,
				redirect_uri : 'http://localhost:8081/account/oauth-callback',
			}))
			console.log(getToken.data);
			axios.defaults.headers = {
				Authorization : `Bearer ${getToken.data.access_token}`
			}
			const graph = await axios.get('https://graph.microsoft.com/beta/me/')
			res.send(graph.data)
		} catch (e){
			console.log(e.response.data);
		}
		//localhost:8081/account/oauth-redirect
	});
	
	done();
};