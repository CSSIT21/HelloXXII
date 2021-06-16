const User = thinky.createModel('users', {
	id: thinky.type.string().uuid(4).optional(),
	name: thinky.type.string().uppercase(),
	nickname: thinky.type.string().alphanum(),
	email: thinky.type.string().email(),
	usertype: thinky.type.number().integer(),
}, {
	enforce_missing: true,
	enforce_extra: 'remove',
	enforce_type: 'strict',
});

User.ensureIndex('email');

module.exports = User;