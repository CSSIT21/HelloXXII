module.exports = thinky.createModel('senpai', {
	id: thinky.type.string(),
	pairing_code: thinky.type.string().allowNull(true),
	commit_code: thinky.type.string().allowNull(true),
	color_name: thinky.type.string(),
	color_code: thinky.type.string(),
	kohis: thinky.type.array().schema(thinky.type.string()).default([]),
	hints: thinky.type.array().schema(thinky.type.string()).default([]),
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});