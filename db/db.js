const knexfile = require('../knexfile');
const knexConnector = require('knex');
const knex = knexConnector(knexfile.development);

module.exports = knex;

// Or...
// const knex = require('knex')({
//     development: {
//         client: 'pg',
//         connection: {
//           database: 'rest_api'
//         },
//         migrations: {
//           tableName: 'migrations',
//           directory: './db/migrations'
//         }
//     }
// })
// module.exports = knex;
