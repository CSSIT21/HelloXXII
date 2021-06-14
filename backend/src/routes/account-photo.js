const Photo = require('@models/Photo');

module.exports = (app, opts, done) => {
	
	app.get('/account/photo/:id', async (req, res) => {
		try {
			const photo = await Photo.filter({ id: req.params.id }).run();
			if (photo.length === 0) {
				res.code(404).send({
					success: false,
					error: 3001,
					error_desc: 'No profile picture for specified user id found.',
				});
			} else {
				res.header('Content-Type', photo[0].mime);
				res.send(photo[0].photo);
			}
		} catch (e) {
			res.send({
				success: false,
				error: 3001,
				error_desc: e.message,
			});
		}
	});
	done();
};