module.exports = thinky.createModel('colines', {
	id: thinky.type.string().uuid(4).optional(),
	name: thinky.type.string().alphanum(),
	line_url: thinky.type.string(),
	icon: thinky.type.string(),
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});