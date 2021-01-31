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
//get user by id
router.get("/users/id/:id", (req, res) => {
  Users.getUserById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get user by email" });
    });
});
//get user by email
router.get("/users/:user_email", (req, res) => {
  Users.getUserByEmail(req.params.user_email)
    .then((user) => {
      if (user.length === 0) {
        res.status(404).json({ message: "User not in database" });
      } else {
        res.status(200).json(user[0]);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get user by email" });
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
