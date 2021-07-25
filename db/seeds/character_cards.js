
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character_cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('character_cards').insert([
        {
          id: 1, 
          card_id: 1,
          character_id: 1
        },
        {
          id: 2, 
          card_id: 2,
          character_id: 1
        },
        {
          id: 3, 
          card_id: 3,
          character_id: 2
        },
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('character_cards_id_seq', (SELECT MAX(id) FROM character_cards));`
      );
    });
};
