
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {name: 'Fluffy '},
        {name: 'Spot'},
        {name: 'Rover'}
      ]);
    });
};
