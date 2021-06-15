module.exports = thinky.createModel('noobs', {
	quota: Number,
	attempt: Array,
	pair: String,
	paired: Boolean,
}, {
	enforce_missing: true,
	enforce_extra: 'none',
	enforce_type: 'strict',
});