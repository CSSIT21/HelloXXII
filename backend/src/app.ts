import fastify, { FastifyServerOptions } from 'fastify';

const buildApp = (opts: FastifyServerOptions) => {
    const app = fastify(opts);
    return app;
};

export default buildApp;