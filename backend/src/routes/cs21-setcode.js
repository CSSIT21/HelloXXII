const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { genericError, axiosError } = require('@utils/response');
const Insane = require('@models/Insane');

const alphanumRegex = /^[a-zA-Z0-9_-]*$/;

module.exports = (app, opts, done) => {
	app.post('/cs21/setcode', async (req, res) => {
		try {
			// * Retrieve variables.
			const { pairingCode, commitCode } = req.body;
			const { id, usertype } = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			// * Check `usertype` permission.
			if (usertype === 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS21 only.',
				};
			}
			
			// * Validate retrieved code.
			if (!alphanumRegex.test(pairingCode) || !alphanumRegex.test(commitCode)) {
				return {
					success: false,
					error: 4002,
					error_desc: 'The code contains unallowed collation character.',
				};
			}
			
			// * Verify that the insane record of the user is never set the pairing code or commit code.
			const document = await Insane.get(id).run();
			if (document.pair && document.code) {
				return {
					success: false,
					error: 4003,
					error_desc: 'This account has been already registered the code.',
				};
			}
			
			// * Check for code previously taken by another one.
			const duplicated = await Insane.filter(
				thinky.r.row('pair').eq(pairingcode)
					.or(
						thinky.r.row('code').eq(commitcode),
					),
			).run();
			
			if (duplicated.length > 0) {
				return {
					success: false,
					error: 4004,
					error_desc: 'The code is already taken by another one.',
				};
			}
			
			await document.merge({
				pair: pairingCode,
				code: commitCode,
			}).save();
			
			return {
				success: true,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	done();
};