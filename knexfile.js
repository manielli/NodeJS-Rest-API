// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'rest_api'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    }
  }
};
