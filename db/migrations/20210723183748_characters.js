
exports.up = function(knex) {
    return knex.schema.createTable('characters', table => {
        table.increments()
        table.string('name').notNullable().unique()
        table.string('description')
        table.string('color').notNullable()
        table.timestamps(true, true)
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters'); 
};
