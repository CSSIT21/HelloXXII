// body-parser
module.exports = (fastify) => {
    fastify.addContentTypeParser('application/json', {
        parseAs: 'string'
    }, function (req, body, done) {
        try {
            var json = JSON.parse(body)
            done(null, json)
        } catch (err) {
            err.statusCode = 400
            done(err, undefined)
        }
    });
}