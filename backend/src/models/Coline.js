module.exports = thinky.createModel('colines', {
	name: String,
	line_url: String,
	icon: String,
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});