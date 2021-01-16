exports.seed = function (knex) {
  return knex("users").insert([
    {
      user_name: "justin",
      user_email: "justin@mail.com",
    },
    {
      user_name: "will",
      user_email: "will@mail.com",
    },
    {
      user_name: "mike",
      user_email: "mike@mail.com",
    },
  ]);
};
