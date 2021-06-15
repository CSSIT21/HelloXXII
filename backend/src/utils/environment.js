const environment = process.env.NODE_ENV || 'development';
const dev = environment === 'development';
const url = dev ? 'http://localhost:8081' : 'https://helloxxii-api.cscc.cf';
module.exports = { dev, url };