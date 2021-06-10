// cors
module.exports = (fastify) => {
	fastify.register(require('fastify-cors'), {});
};