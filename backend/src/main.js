const fastify = require('fastify')();

require('./register')(fastify);

fastify.listen(8081, (err, server) => {
    require('consola').success(`Successfully started server ${server.green}`);
});