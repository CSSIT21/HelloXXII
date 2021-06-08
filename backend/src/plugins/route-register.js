module.exports = (fastify) => {
    fastify.register(require('../routes/account'), {
        prefix: '/account'
    });
};