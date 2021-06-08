/** These plugins are auto-registrated **/
module.exports = (fastify) => {
    const glob = require('glob');
    const path = require('path');
    const consola = require('consola');
    const colors = require('colors');
    require('module-alias/register');

    global.thinky = require('thinky')({
        host: '10.5.55.11'
    });

    glob.sync(path.join(__dirname, './plugins/*.js'), {}).forEach(file => {
        consola.success(`Successfully added ${file.yellow}`);
        require(file)(fastify);
    });
}