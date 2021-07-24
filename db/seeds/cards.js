
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, 
          name: 'Med Kit',
          type: "action",
          flavor_text: "You're not sure why so many tin boxes with gauss and morphine are lying around and you don't care.",
          instructions: "Gain 3 Stamina."
        },
        {
          id: 2, 
          name: 'Counter Strike',
          type: "anytime",
          flavor_text: "You saw this coming a mile away, your foes will pay for their hubris.",
          instructions: "Play when another players plays and Action Card that costs you Stamina. That player loses 2 Stamina."
        },
        {
          id: 3, 
          name: 'Super Friends Assemble',
          type: "action",
          flavor_text: "This foe is too great for one hero.",
          instructions: "Remove a Crowd Token from the Con Floor and place it in any unoccupied tile surrounding your Attendee piece."
        },
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('cards_id_seq', (SELECT MAX(id) FROM cards));`
      );
    });
};
