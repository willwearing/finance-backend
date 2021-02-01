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
  getIdByEmail(user_email) {
    return db("users").select("id").where({ user_email }).first();
  },
  getUserByEmail(user_email) {
    return db("users").where({ user_email });
  },
  removeUser(id) {
    return db("users")
      .where({ id })
      .del()
      .then(() => this.getUsers());
  },
  removeUserByEmail(email) {
    return this.removeUser(this.getIdByEmail(email));
  },
};
