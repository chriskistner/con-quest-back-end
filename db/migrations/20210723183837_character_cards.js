
exports.up = function(knex) {
    return knex.schema.createTable('character_cards', table => {
        table.increments()
        table.integer('card_id').notNullable()
        table.foreign('card_id').references('cards.id')
        table.integer('character_id').notNullable()
        table.foreign('character_id').references('characters.id')
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('character_cards');  
};
