
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
      table.increments('id');
      table.string('title');
      table.integer('released');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
