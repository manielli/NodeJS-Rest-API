
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
      table.increments('id').primary();
      table.string('title');
      table.timestamp('released');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
