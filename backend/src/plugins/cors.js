// cors
module.exports = (fastify) => {
	fastify.register(require('fastify-cors'), {
		origin: [
			'http://localhost:8080',
			'https://helloxxii.cscc.cf',
		],
		methods: ['GET', 'PUT', 'POST'],
		credentials: true,
	});
};