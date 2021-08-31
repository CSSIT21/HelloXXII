const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const User = require('@models/User');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');

module.exports = (app, opts, done) => {
	app.get('/cs22/info', async (req, res) => {
		try {
			const { id, usertype } = jwt.verify(
				req.cookies.token,
				jwtConstants.secret,
			);
			
			if (usertype !== 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS22 only.',
				};
			}
			
			// * Fetch noob record of the user.
			const document = await Kohi.get(id).run();
			
			// * Fetch info from paired senpai record of the user.
			const senpai_hint = await new Promise((resolve) => {
				Senpai.get(document.senpai)
					.run()
					.then((record) =>
						resolve({
							hints: record.hints.slice(0, document.attempts.length + 1),
						}),
					)
					.catch(() =>
						resolve({
							hints: [],
						}),
					);
			});
			
			const senpai_user = await new Promise((resolve) => {
				User.get(document.senpai)
					.run()
					.then((record) =>
						resolve({
							senpai_name: record.name,
							senpai_nickname: record.nickname,
							senpai_photo: `https://helloxxii-api.cscc.cf/account/photo/${record.id}`,
						}),
					)
					.catch(() =>
						resolve({
							senpai_name: null,
							senpai_nickname: null,
							senpai_photo: null,
						}),
					);
			});
			
			return {
				success: true,
				paired: document.senpai,
				found: document.found,
				quota_remaining: document.quota,
				quota_used: document.attempts.length,
				color_name: document.color_name,
				color_code: document.color_code,
				...senpai_hint,
				...document.found && senpai_user,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};
