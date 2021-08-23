module.exports = thinky.createModel('senpai', {
	id: thinky.type.string.uuid(4).optional(),
	pair_code: thinky.type.string.optional(),
	commit_code: thinky.type.string.optional(),
	kohis: thinky.type.array(),
	hints: thinky.type.array(),
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});