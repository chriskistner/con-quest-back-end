
exports.up = function(knex) {
    return knex.schema.createTable('objectives', table => {
        table.increments()
        table.integer('character_id').notNullable()
        table.foreign('character_id').references('characters.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table.string('name').notNullable()
        table.string('flavor_text')
        table.string('location').notNullable()
        table.integer('cost_action').notNullable().defaultsTo(0)
        table.integer('cost_stamina').notNullable().defaultsTo(0)
        table.integer('cost_cash').notNullable().defaultsTo(0)
        table.integer("tokens").notNullable().defaultsTo(1)
        table.timestamps(true, true)
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('objectives');  
};
