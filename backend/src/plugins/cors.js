// cors
module.exports = (fastify) => {
	fastify.register(require('fastify-cors'), {
		origin: [
			'http://localhost:8080',
			'https://helloxxii.bsthun.com',
		],
		methods: ['GET', 'PUT', 'POST'],
		credentials: true,
	});
};