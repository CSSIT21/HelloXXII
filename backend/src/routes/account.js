module.exports = (fastify, opts, done) => {
    const {
        nanoid
    } = require('nanoid');

    const User = require('@model/user');

    fastify.get('/oauth', (req, res) => {

        res.send({
            "success": true,
            "oauth_url": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
        });
    });

    fastify.get('/oauth-callback', (req, res) => {
        res.send({
            "success": true,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDUzIyQ09ERUxJTkUiLCJuYW1lIjoiQmh1bWphdGUgU3VkcHJhc2VydCIsImVtYWlsIjoiYmh1bWphdGUuc0BtYWlsLmttdXR0LmFjLnRoIiwiaWF0IjoxNTE2MjM5MDIyfQ.x9Txjd9ePFRbwdXeQSvcGMgYdRW_sIGk1fkPsu1JOoE",
            "usertype": 1
        });
    });

    fastify.get('/', (req, res) => {
        User.execute().then((result) => {
            res.send(result);
        });
    });

    done()
}