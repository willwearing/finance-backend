const { json } = require("express");
const express = require("express");
const { runInContext } = require("vm");
const Stocks = require("./stocks-model");
const router = express.Router();
//get all stocks
router.get("/", (req, res) => {
  Stocks.getStocks(req.params.id)
    .then((stocks) => {
      res.status(200).json(stocks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get stocks" });
    });
});
//get stocks by user id
router.get("/:id", (req, res) => {
  Stocks.getStocksByUserId(req.params.id)
    .then((stock) => {
      res.status(200).json(stock);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get users stocks" });
    });
});
//get stocks by user email
router.get("/email/:user_email", (req, res) => {
  Stocks.getStocksByUserEmail(req.params.user_email)
    .then((stock) => {
      res.status(200).json(stock);
    })
    .catch((err) => {
      res.status(500).json({ err, message: "Failed to get users stocks" });
    });
});
//testing getIdByEmail
router.get("/email/email2/:user_email", (req, res) => {
  Stocks.getIdByEmail(req.params.user_email)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ err, message: "failed test" });
    });
});
//get stock by id
router.get("/stock/:id", (req, res) => {
  Stocks.getStocksById(req.params.id)
    .then((stock) => {
      res.status(200).json(stock);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get stock" });
    });
});
//add new stock
router.post("/", (req, res) => {
  Stocks.addStock(req.body)
    .then((stock) => {
      res.status(200).json(stock);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add stock" });
    });
});

module.exports = router;
