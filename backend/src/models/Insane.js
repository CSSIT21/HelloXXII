module.exports = thinky.createModel('insanes', {
	name: String,
	pair: String,
	code: String,
	hints: Array,
	co: String,
}, {
	enforce_missing: true,
	enforce_extra: 'none',
	enforce_type: 'strict',
});