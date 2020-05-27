const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Get all Orders
router.get("/", async (req, res) => {
  res.send("HEllo");
});

// Create an Order
router.post("/", async (req, res) => {
  const { products, total } = req.body;

  try {
    const newOrder = new Order({
      products,
      total,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
