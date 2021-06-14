module.exports = thinky.createModel('photos', {
	id: thinky.type.string().uuid(4),
	mime: thinky.type.string(),
	photo: thinky.type.buffer(),
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});