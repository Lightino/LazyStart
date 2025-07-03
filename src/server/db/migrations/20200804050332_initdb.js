export async function up(knex) {
  await knex.schema.createTable("example", function (table) {
    table.string("id").primary().notNullable(); // es: auth0|xyz123
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("example");
}
