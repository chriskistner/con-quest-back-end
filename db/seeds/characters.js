
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {
          id: 1, 
          name: 'The Gamer',
          description: 'Specializes in Stamina effecting powers.',
          color: 'blue'
        },
        {
          id: 2, 
          name: 'Comic Nerd',
          description: 'Specializes in Cash effecting powers.',
          color: 'yellow'
        },
        {
          id: 3, 
          name: 'Otaku',
          description: 'Specializes in movement across the Con Floor.',
          color: 'red'
        },
        {
          id: 4, 
          name: 'Dungeon Master',
          description: 'Specializes in Stamina effecting powers',
          color: 'Green'
        },
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('characters_id_seq', (SELECT MAX(id) FROM characters));`
      );
    });
};
