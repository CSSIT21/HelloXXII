module.exports = thinky.createModel('colors', {
	id: thinky.type.string().uuid(4).optional(),
	name: thinky.type.string(),
	code: thinky.type.string(),
});