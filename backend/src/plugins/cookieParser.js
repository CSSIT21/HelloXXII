// cookie-parser
module.exports = (fastify) => {
    fastify.register(require('fastify-cookie'), {
        secret: "HelloWorld", // for cookies signature
        parseOptions: {} // options for parsing cookies
    });
}