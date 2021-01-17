exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("user_name", 128).notNullable();
      tbl.string("user_email", 128).notNullable();
    })
    .createTable("stocks", (tbl) => {
      tbl.increments();
      tbl.string("stock_ticker", 1000).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stocks").dropTableIfExists("users");
};
