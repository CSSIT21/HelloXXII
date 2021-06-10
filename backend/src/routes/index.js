const User = require('@model/user');

module.exports = (app, opts, done) => {

    app.get('/', (req, res) => {
        User.execute().then((results) => {
            res.send(results);
        });
    });

    done()
}