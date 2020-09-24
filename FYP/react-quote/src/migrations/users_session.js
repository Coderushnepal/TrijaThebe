/**
 * Create 'admin_sessions' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable("user_sessions", (table) => {
      table.increments("id");
      table
        .integer("user_id").notNull().references("id")
        .inTable("users");
      table.string("token", 500).notNull();
      table.boolean("is_active").notNull().defaultTo(true);
      table.timestamp("created_at").defaultTo(knex.raw("now()"));
    });
  }
  
  /**
   * Drop table 'admin_sessions'
   *
   * @param knex
   * @returns {Promise}
   */
  export function down(knex) {
    return knex.schema.dropTable("user_sessions");
  }