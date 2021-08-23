const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const User = require('@models/User');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');

module.exports = (app, opts, done) => {
	app.get('/cs22/commit', async (req, res) => {
		try {
			// * Retrieve variables.
			const { commitCode } = req.body;
			const { id, usertype } = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			if (usertype !== 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS22 only.',
				};
			}
			
			// * Fetch kohi record of the user.
			const document = await Kohi.get(id).run();
			
			if (document.found) {
				return {
					success: false,
					error: 4002,
					error_desc: 'User has already found a peer mentor.',
				};
			}
			
			if (document.quota === 0) {
				return {
					success: false,
					error: 4003,
					error_desc: 'User has ran out of checking attempt quota.',
				};
			}
			
			if (document.attempts.includes(commitCode)) {
				return {
					success: false,
					error: 4005,
					error_desc: 'Commit code was previously applied, duplicate attempt.',
				};
			}
			
			const senpais = await Senpai.filter({ code: commitCode }).run();
			if (senpais.length === 0) {
				return {
					success: false,
					error: 4006,
					error_desc: 'Commit code not found.',
				};
			}
			
			// * Deduct mentor check quota for 1 and add current `commitCode` to attempt list.
			await document.merge({
				quota: document.quota - 1,
				attempts: [...document.attempts, commitCode],
			}).save();
			
			if (senpais[0].id !== document.pair) {
				return {
					success: false,
					error: 4007,
					error_desc: 'Wrong commit. Checking result goes mismatch peer mentor.',
					quota_used: document.attempts.length,
					quota_remaining: document.quota,
				};
			}
			
			await document.merge({
				found: true,
			}).save();
			
			const senpaiUser = await User.get(senpais[0].id).run();
			
			return {
				success: true,
				mentor_name: senpaiUser.name,
				mentor_avatar: url + +'/account/photo/' + senpaiUser.id,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};