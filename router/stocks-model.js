const db = require("../database/db-config");

module.exports = {
  addStock(stock) {
    return db("stocks")
      .insert(stock, "id")
      .then(([id]) => this.getStocksById(id));
  },
  getStocks() {
    return db("stocks").select("*");
  },
  getStocksByUserId(user_id) {
    return db("stocks").where({ user_id });
  },
  getStocksById(id) {
    return db("stocks").where({ id }).first();
  },
};
