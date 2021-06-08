const fastify = require('fastify')({
    logger: true
});

global.thinky = require('thinky')({

});

require('./plugins/bodyParser')(fastify);
require('./plugins/cookieParser')(fastify);
require('./plugins/cors')(fastify);
require('./plugins/route-register')(fastify);

fastify.listen(8081);