require('module-alias/register');
const fastify = require('fastify');
const consola = require('consola');
const { registerPlugins, registerRoutes } = require('@utils/register');
const { getThinkyInstance } = require('@utils/thinky');

global.thinky = getThinkyInstance();

const app = fastify();
registerPlugins(app);
registerRoutes(app);

app.listen(8081).then(() => consola.success(`Successfully initialized.`));

module.exports = app;