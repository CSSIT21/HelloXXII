const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const User = require('@models/User');
const Insane = require('@models/Insane');
const Noob = require('@models/Noob');

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
			
			// * Fetch noob record of the user.
			const document = await Noob.get(id).run();
			
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
			
			const insanes = await Insane.filter({ code: commitCode }).run();
			if (insanes.length === 0) {
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
			
			if (insanes[0].id !== document.pair) {
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
			
			const insaneUser = await User.get(insanes[0].id).run();
			
			return {
				success: true,
				mentor_name: insaneUser.name,
				mentor_avatar: url + +'/account/photo/' + insaneUser.id,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};