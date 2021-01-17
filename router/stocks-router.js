const express = require("express");
const Stocks = require("./stocks-model");
const router = express.Router();

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
