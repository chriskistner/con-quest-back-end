
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, 
          character_id: 4,
          name: 'Screening of Old Super Hero TV Show',
          location: 'Panel Tile',
          flavor_text: "There's going to be a cast reuinion too, first one in 49 years.",
          cost_action: 1,
          cost_cash: 0,
          cost_stamina: 3,
          tokens: 1
        },
        {
          id: 2, 
          character_id: 1,
          name: 'Fighting Game Tournament',
          location: 'Demo Booth',
          flavor_text: "Test Your Might!",
          cost_action: 0,
          cost_cash: 0,
          cost_stamina: 5,
          tokens: 1
        },
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('objectives_id_seq', (SELECT MAX(id) FROM objectives));`
      );
    });
};
