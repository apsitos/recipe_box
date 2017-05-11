
exports.seed = function(knex, Promise) {
  return knex('recipes').del()
  .then(() => {
    return Promise.all([
      knex('recipes').insert({
        title: 'books',
        author: 'they might be useful',
        url: 'Dusty',
        notes: '',
        created_at: new Date
      }),
      knex('recipes').insert({
        title: 'skis',
        author: 'Joe left them',
        url: 'Dusty',
        notes: '',
        created_at: new Date
      }),
      knex('recipes').insert({
        title: 'bike',
        author: 'blown tube',
        url: 'Sparkling',
        notes: '',
        created_at: new Date
      })
    ]);
  });
};
