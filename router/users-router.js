const express = require("express");
const Users = require("./users-model");
const router = express.Router();
//get all users
router.get("/", (req, res) => {
  Users.getUsers(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get users" });
    });
});
//get user by email
router.get("/users/:user_email", (req, res) => {
  Users.getUserByEmail(req.params.user_email)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get user" });
    });
});
//add new user
router.post("/users", (req, res) => {
  Users.addUser(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add user" });
    });
});
module.exports = router;
