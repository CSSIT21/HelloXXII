require('module-alias/register');
const fastify = require('fastify');
const { registerPlugins, registerRoutes } = require('@utils/auto-register');

const app = (opts) => {
    const app = fastify(opts);
    registerPlugins(app);
    registerRoutes(app);
    return app;
};

app({
    logger: true
}).listen(8081);

module.exports = app;