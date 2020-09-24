/**
 * Create 'user_login' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable("users", table => {
      table.increments('id');
      table.string("email", 150).notNull().unique();
      table.string("password", 100).notNull();
    });
  }
  
  /**
   * Drop table 'user_login'
   *
   * @param knex
   * @returns {Promise}
   */
  export function down(knex) {
    return knex.schema.dropTable("users");
  }