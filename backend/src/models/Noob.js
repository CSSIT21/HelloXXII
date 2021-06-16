module.exports = thinky.createModel('noobs', {
	id: thinky.type.string().uuid(4),
	quota: thinky.type.number().default(5),
	attempt: thinky.type.array().schema(thinky.type.string()).default([]),
	pair: thinky.type.string().uuid(4).allowNull(true),
	paired: thinky.type.boolean().default(false),
}, {
	enforce_missing: true,
	enforce_extra: 'none',
	enforce_type: 'strict',
});