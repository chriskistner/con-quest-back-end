
exports.up = function(knex) {
    return knex.schema.createTable('cards', table => {
        table.increments()
        table.string('name').notNullable()
        table.string('type').notNullable()
        table.string('flavor_text')
        table.string('instructions').notNullable()
        table.timestamps(true, true)
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cards'); 
};
