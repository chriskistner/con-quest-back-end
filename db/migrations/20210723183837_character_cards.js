
exports.up = function(knex) {
    return knex.schema.createTable('character_cards', table => {
        table.increments()
        table.integer('card_id').references('id').inTable('cards')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table.integer('character_id').references('id').inTable('characters')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('character_cards');  
};
