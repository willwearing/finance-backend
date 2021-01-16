exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("user_name", 128).notNullable();
    tbl.string("user_email", 128).notNullable();
  });
};

exports.down = function (knex) {};
