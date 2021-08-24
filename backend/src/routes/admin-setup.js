const crypto = require('crypto');
const adminConstants = require('../constants/admin.json');
const { genericError } = require('@utils/response');
const User = require('@models/User');
const Photo = require('@models/Photo');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');

module.exports = (app, opts, done) => {
	app.patch('/admin/setup', async (req, res) => {
		// * Check for bearer admin token
		const bearer = req.headers.authorization.split(' ')[1];
		if (crypto.createHash('sha256').update(bearer).digest('hex') !== adminConstants.secret) {
			return res.code(401).send();
		}
		
		// * Parse request body and correct default
		const { senpais } = req.body;
		
		try {
			// * Clear all data
			await Promise.all([
				thinky.r.table(User.getTableName()).delete().run(),
				thinky.r.table(Photo.getTableName()).delete().run(),
				thinky.r.table(Senpai.getTableName()).delete().run(),
				thinky.r.table(Kohi.getTableName()).delete().run(),
			]);
			
			// * Insert Senpai
			await Promise.all(
				senpais.map(
					(el) => (async () => {
						await Senpai.save({
							id: el.email,
							pairing_code: null,
							commit_code: null,
							hints: null,
							kohis: null,
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
