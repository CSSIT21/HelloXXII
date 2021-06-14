module.exports = thinky.createModel('insanes', {
	name: String,
	pair: String,
	code: String,
	hints: Array,
	co: String,
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});