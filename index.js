// Import the Fastify framework
const fastify = require('fastify')({
  logger: true
});

// Define a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
