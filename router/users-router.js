const express = require("express");
const Users = require("./users-model");
const router = express.Router();

router.get("/", (req, res) => {
  Users.getUsers(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get users" });
    });
});
router.get("/:id/users", (req, res) => {
  Users.getUserById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get user" });
    });
});
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
