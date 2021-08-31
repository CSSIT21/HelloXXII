module.exports = thinky.createModel('kohis', {
	id: thinky.type.string().uuid(4),
	quota: thinky.type.number().default(5),
	attempts: thinky.type.array().schema(thinky.type.string()).default([]),
	color_name: thinky.type.string(),
	color_code: thinky.type.string(),
	senpai: thinky.type.string().uuid(4).allowNull(true),
	found: thinky.type.boolean().default(false),
});