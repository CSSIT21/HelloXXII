module.exports = (app, opts, done) => {
	app.get('/admin/op', (req, res) => {
		// TODO: Add admin op permission to existing user.
	});
	
	done();
};