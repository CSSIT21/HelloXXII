const crypto = require('crypto');
const adminConstants = require('../constants/admin.json');
const { genericError } = require('@utils/response');
const User = require('@models/User');
const Photo = require('@models/Photo');
const Insane = require('@models/Insane');
const Noob = require('@models/Noob');
const Coline = require('@models/Coline');

module.exports = (app, opts, done) => {
	app.patch('/admin/setup', async (req, res) => {
		// * Check for bearer admin token
		const bearer = req.headers.authorization.split(' ')[1];
		if (crypto.createHash('sha256').update(bearer).digest('hex') !== adminConstants.secret) {
			return res.code(401).send();
		}
		
		// * Parse request body and correct default
		const { colines, insanes } = req.body;
		const colineMap = {};
		
		try {
			// * Clear all data
			await Promise.all([
				thinky.r.table(User.getTableName()).delete().run(),
				thinky.r.table(Photo.getTableName()).delete().run(),
				thinky.r.table(Insane.getTableName()).delete().run(),
				thinky.r.table(Noob.getTableName()).delete().run(),
				thinky.r.table(Coline.getTableName()).delete().run(),
			]);
			
			// * Insert colines
			await Promise.all(
				colines.map(
					(el) => (async () => {
						const document = await Coline.save(el);
						colineMap[el.name] = document;
					})(),
				),
			);
			
			// * Insert insanes
			await Promise.all(
				insanes.map(
					(el) => (async () => {
						const coline = colineMap[el.coname];
						await Insane.save({
							id: el.email,
							pair: null,
							code: null,
							hints: null,
							coline: coline.id,
						});
					})(),
				),
			);
			
			// for (const el of insanes) {
			// 	const coline = colineMap[el.coname];
			// 	await Insane.save({
			// 		id: el.email,
			// 		coline: coline.id,
			// 	});
			// }
			
			return {
				success: true,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	done();
};
