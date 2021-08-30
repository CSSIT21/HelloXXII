const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { genericError, axiosError } = require('@utils/response');
const Senpai = require('@models/Senpai');

const alphanumRegex = /^[a-zA-Z0-9_-]*$/;

module.exports = (app, opts, done) => {
	app.post('/cs21/setcode', async (req, res) => {
		try {
			// * Retrieve variables.
			const { pairing_code, commit_code } = req.body;
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
			if (!alphanumRegex.test(pairing_code) || !alphanumRegex.test(commit_code)) {
				return {
					success: false,
					error: 4002,
					error_desc: 'The code contains unallowed collation character.',
				};
			}
			
			// * Verify that the insane record of the user is never set the pairing code or commit code.
			const document = await Senpai.get(id).run();
			if (document.pairing_code && document.commit_code) {
				return {
					success: false,
					error: 4003,
					error_desc: 'This account has been already registered the code.',
				};
			}
			
			// * Check for code previously taken by another one.
			const pairing_duplicated = await Senpai.filter(thinky.r.row('pairing_code').eq(pairing_code)).run();
			const commit_duplicated = await Senpai.filter(thinky.r.row('commit_code').eq(commit_code)).run();
			
			if (pairing_duplicated.length > 0) {
				return {
					success: false,
					error: 4004,
					error_desc: 'The pairing code is already taken by another one.',
				};
			}
			
			if (commit_duplicated.length > 0) {
				return {
					success: false,
					error: 4004,
					error_desc: 'The commit code is already taken by another one.',
				};
			}
			
			await document.merge({
				pairing_code,
				commit_code,
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