
exports.seed = function(knex, Promise) {
  return knex('recipes').del()
  .then(() => {
    return Promise.all([
      knex('recipes').insert({
        title: 'Dal',
        author: 'Smitten Kitchen',
        url: 'www.smittenkitchen.com',
        notes: 'tasty, lentils never got really soft',
        created_at: new Date
      }),
      knex('recipes').insert({
        title: 'bread',
        author: 'King Arthur Flour',
        url: 'www.kingarthurflour.com',
        notes: 'Be sure to let cool completely',
        created_at: new Date
      }),
      knex('recipes').insert({
        title: 'oatmeal chocolate chip cookies',
        author: 'King Arthur Flour',
        url: 'www.kingarthurflour.com',
        notes: 'Many adjustments need to be made. More oatmeal, add spices',
        created_at: new Date
      })
    ]);
  });
};
