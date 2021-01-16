require("colors");
const express = require("express");
const helmet = require("helmet");
const usersRouter = require("./router/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/", usersRouter);

module.exports = server;
