const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';

module.exports = dev;