exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.string('url');
      table.text('notes');

      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes'),
  ]);
};
