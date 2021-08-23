module.exports = thinky.createModel('senpai', {
	id: thinky.type.string.uuid(4).optional(),
	pairing_code: thinky.type.string.optional(),
	commit_code: thinky.type.string.optional(),
	kohis: thinky.type.array().schema(thinky.type.string()).default([]),
	hints: thinky.type.array().schema(thinky.type.string()).default([]),
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});