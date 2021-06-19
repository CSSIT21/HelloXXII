const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const Insane = require('@models/Insane');
const Noob = require('@models/Noob');

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
			
			const document = await Noob.get(id);
			
			if (document.pair !== null) {
				return {
					success: false,
					error: 4002,
					error_desc: 'User has already paired with peer mentor.',
				};
			}
			
			const insanes = await Insane.filter({ pair: paringCode }).run();
			if (insanes.length === 0) {
				return {
					success: false,
					error: 4003,
					error_desc: 'Incorrect paring code.',
				};
			} else {
				const anotherNoob = await Noob.filter({ pair: insanes[0].id }).run();
				if (anotherNoob.length > 0) {
					return {
						success: false,
						error: 4004,
						error_desc: 'The paring code has been previously used.',
					};
				}
				
				await document.merge({
					pair: insanes[0].id,
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