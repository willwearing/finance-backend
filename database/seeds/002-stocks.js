exports.seed = function (knex) {
  return knex("stocks").insert([
    {
      stock_ticker: "AAPL",
      user_id: "2",
    },
    {
      stock_ticker: "AMZN",
      user_id: "2",
    },
    {
      stock_ticker: "GOOGL",
      user_id: "2",
    },
  ]);
};
