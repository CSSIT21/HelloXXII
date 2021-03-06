const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { genericError, axiosError } = require('@utils/response');
const Senpai = require('@models/Senpai');

const alphanumRegex = /^[a-zA-Z0-9_-]*$/;

module.exports = (app, opts, done) => {
	app.post('/cs21/sethints', async (req, res) => {
		try {
			// * Retrieve variables.
			const { hints } = req.body;
			const { id, usertype } = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			// * Check `usertype` permission.
			if (usertype === 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS21 only.',
				};
			}
			
			if (!Array.isArray(hints) || hints.length !== 5) {
				return {
					success: false,
					error: 3021,
					error_desc: 'Invalid schema of request payload.',
				};
			}
			
			// * Verify that the insane record of the user is never set hint before.
			const document = await Senpai.get(id).run();
			
			if (document.hints.length > 0) {
				return {
					success: false,
					error: 4003,
					error_desc: 'Hints have previously been set. To edit them, please contact administrator.',
				};
			}
			
			await document.merge({
				hints: hints,
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