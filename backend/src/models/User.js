const User = thinky.createModel('users', {
	name: thinky.type.string().uppercase(),
	nickname: thinky.type.string().alphanum(),
	email: thinky.type.string().email(),
	usertype: thinky.type.number().integer(),
}, {
	enforce_missing: true,
	enforce_extra: 'none',
	enforce_type: 'strict',
});

User.ensureIndex('email');

module.exports = User;