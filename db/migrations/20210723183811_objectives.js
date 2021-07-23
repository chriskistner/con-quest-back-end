
exports.up = function(knex) {
    return knex.schema.createTable('characters', table => {
        table.increments()
        table.integer('character_id').references('id').inTable('characters')
        table.string('name').notNullable()
        table.integer('cost_stamina').notNullable().defaultsTo(0)
        table.integer('cost_cash').notNullable().defaultsTo(0)
        table.integer("tokens").notNullable().defaultsTo(1)
        table.timestamps(true, true)
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('objectives');  
};
