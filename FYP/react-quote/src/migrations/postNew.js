/**
 * Create 'home' table/'
 * @param knex 
 * @returns {Promise}
 */


export function up(knex) {
    return knex.schema.createTable('quote',table => {
        table.increments('id');
        table.string('title', 100).notNull();
        table.string('description', 1000).notNull();
        });
}

// /**
//  * Drop table 'home'
//  * @param knex 
//  * @ returns {Promise}
//  */


export function down(knex) {
  return knex.schema.dropTable('quote')
}