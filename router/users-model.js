const db = require("../database/db-config");

module.exports = {
  addUser(user) {
    return db("users")
      .insert(user)
      .then(([id]) => this.getUserById(id));
  },
  getUsers() {
    return db("users").select("*");
  },
  getUserById(id) {
    return db("users").where({ id }).first();
  },
};
