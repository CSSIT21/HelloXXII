const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { genericError, axiosError } = require('@utils/response');
const Insane = require('@models/Insane');

module.exports = (app, opts, done) => {
	app.post('/cs21/setcode', async (req, res) => {
		try {
			const pattern = /^[a-zA-Z0-9_-]*$/;
			const { id, usertype } = jwt.verify(req.body.token, jwtConstants.secret);
			
			const insane = await Insane.get(id).run();
			const checkDuplicatedCode = await Insane.filter({
				pair: req.body.code,
			}).run();
			
			if (usertype === 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS21 only.',
				};
			} else if (!pattern.test(req.body.code)) {
				return {
					success: false,
					error: 4002,
					error_desc: 'The code contains unallowed collation charactor.',
				};
			} else if (insane.pair) {
				return {
					success: false,
					error: 4003,
					error_desc: 'This account has been already registered the code.',
				};
			} else if (checkDuplicatedCode) {
				return {
					success: false,
					error: 4004,
					error_desc: 'The code is already taken by another one.',
				};
			} else {
				await insane.merge({
					pair: req.body.code,
				}).save();
			}
			
			return {
				success: true,
			};
		} catch (e) {
			genericError(e);
		}
	});
	done();
};