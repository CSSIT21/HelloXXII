module.exports = thinky.createModel('kohi', {
	id: thinky.type.string.uuid(4).optional(),
	quota: thinky.type.array().optional(),
	attemptes: thinky.type.array.optional(),
	senpai: thinky.type.string.uuid(4).optional(),
	found: thinky.type.boolean.default(false),
});