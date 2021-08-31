const crypto = require('crypto');
const adminConstants = require('../constants/admin.json');
const { genericError } = require('@utils/response');
const User = require('@models/User');
const Photo = require('@models/Photo');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');
const Color = require('@models/Color');

module.exports = (app, opts, done) => {
	app.patch('/admin/setup', async (req, res) => {
		// * Check for bearer admin token
		const bearer = req.headers.authorization.split(' ')[1];
		if (crypto.createHash('sha256').update(bearer).digest('hex') !== adminConstants.secret) {
			return res.code(401).send();
		}
		
		// * Parse request body and correct default
		const { colors, senpais } = req.body;
		
		if (colors.length < senpais.length) {
			return genericError(new Error('Number of color is not sufficient.'));
		}
		
		// * Randomize colors
		colors.sort(() => .5 - Math.random());
		
		try {
			// * Clear all data
			await Promise.all([
				thinky.r.table(User.getTableName()).delete().run(),
				thinky.r.table(Photo.getTableName()).delete().run(),
				thinky.r.table(Senpai.getTableName()).delete().run(),
				thinky.r.table(Kohi.getTableName()).delete().run(),
				thinky.r.table(Color.getTableName()).delete().run(),
			]);
			
			// * Insert data
			await Promise.all([
					...senpais.map(
						(el) => Senpai.save({
							id: el.email,
							pairing_code: null,
							commit_code: null,
						}),
					),
					...colors.map(
						(el) => Color.save(el),
					),
				],
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
