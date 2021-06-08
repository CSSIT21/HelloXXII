const {
    nanoid
} = require("nanoid");

module.exports = {
    JWT_SECRET: nanoid(256)
}