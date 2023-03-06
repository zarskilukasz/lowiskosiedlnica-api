module.exports = ({ env }) => ({
  host: env('HOST', 'http://ns3053871.ip-137-74-1.eu'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
