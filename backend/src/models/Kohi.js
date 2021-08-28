module.exports = thinky.createModel('kohi', {
	id: thinky.type.string().uuid(4),
	quota: thinky.type.array().default(5),
	attempts: thinky.type.array().schema(thinky.type.string()).default([]),
	senpai: thinky.type.string().uuid(4).allowNull(true),
	found: thinky.type.boolean().default(false),
});