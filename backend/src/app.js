const fastify = require('fastify');
const { registerPlugins, registerRoutes } = require('@utils/auto-register');

const buildApp = (opts) => {
    const app = fastify(opts);
    registerPlugins(app);
    registerRoutes(app);
    return app;
};

module.exports = buildApp;