const express = require("express");
const Users = require("./users-model");
const router = express.Router();
//get all users
router.get("/users", (req, res) => {
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
        res.status(404).json({ message: "no user" });
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
//delete user by id
router.delete("/users/delid/:id", (req, res) => {
  const id = req.params.id;
  Users.removeUser(id)
    .then((del) => {
      if (del) {
        res.status(200).json(del);
      } else {
        res.status(404).json({ message: "User id not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, err });
    });
});
//delete by user email
router.delete("/users/del/:user_email", (req, res) => {
  Users.removeUserByEmail(req.params.user_email)
    .then((del) => {
      res.status(200).json(del);
    })
    .catch((err) => {
      res.status(500).json({ err, message: "failed test" });
    });
});

module.exports = router;
