const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');

module.exports = (app, opts, done) => {
	app.post('/cs22/pair', async (req, res) => {
		try {
			const { paringCode } = req.body;
			const { id, usertype } = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			if (usertype !== 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS22 only.',
				};
			}
			
			const document = await Kohi.get(id).run();
			
			if (document.pair !== null) {
				return {
					success: false,
					error: 4002,
					error_desc: 'User has already paired with peer mentor.',
				};
			}
			
			const senpais = await Senpai.filter({ pairing_code: paringCode }).run();
			if (senpais.length === 0) {
				return {
					success: false,
					error: 4003,
					error_desc: 'Incorrect paring code.',
				};
			} else {
				if (senpais[0].kohis.length() >= 2) {
					return {
						success: false,
						error: 4004,
						error_desc: 'The paring code has been reached quota limit.',
					};
				}
				
				await document.merge({
					senpai: senpais[0].id,
				}).save();
			}
			
			return {
				success: true,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};