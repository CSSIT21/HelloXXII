module.exports = (fastify) => {
    global.thinky = require('thinky')({
        host: "10.5.55.11",
        log: false
    });
}