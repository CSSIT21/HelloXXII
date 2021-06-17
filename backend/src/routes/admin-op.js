const crypto = require('crypto');
const adminConstants = require('../constants/admin.json');
const { genericError } = require('@utils/response');
const User = require('@models/User');

module.exports = (app, opts, done) => {
	app.patch('/admin/op', async (req, res) => {
		// * Check for bearer admin token
		const bearer = req.headers.authorization.split(' ')[1];
		if (crypto.createHash('sha256').update(bearer).digest('hex') !== adminConstants.secret) {
			return res.code(401).send();
		}
		
		const { list } = req.body;
		const updated = [];
		
		try {
			for (const el of list) {
				await new Promise((resolve, reject) => {
					User.getAll(el, { index: 'email' }).run()
						.then((users) => {
							if (users.length === 0) {
								return reject({
									error: 4001,
									error_desc: `No such user with corresponding email '${el}' exist in database.`,
								});
							}
							
							users[0].merge({
									usertype: 3,
								})
								.save()
								.then(() => {
									updated.push(el);
									resolve();
								})
								.catch((e) => reject(e));
						})
						.catch((e) => reject(e));
				});
			}
			
			// await Promise.all(
			// 	list.map(
			// 		(el) =>
			// 	),
			// );
			
			return {
				success: true,
			};
		} catch (e) {
			return {
				...genericError(e),
				updated,
			};
		}
	});
	
	done();
};