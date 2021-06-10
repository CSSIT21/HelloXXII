require('module-alias/register');
const buildApp = require('@app');

buildApp({
    logger: true
}).listen(8081);