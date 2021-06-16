module.exports = thinky.createModel('insanes', {
	id: thinky.type.string(),
	pair: thinky.type.string().allowNull(true),
	code: thinky.type.string().allowNull(true),
	hints: thinky.type.array().schema(thinky.type.string()).allowNull(true),
	coline: thinky.type.string().uuid(4),
}, {
	enforce_missing: true,
	enforce_extra: 'none',
	enforce_type: 'strict',
});