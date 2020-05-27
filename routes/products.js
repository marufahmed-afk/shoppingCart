const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const Order = require("../models/Order");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const { name, price, prdQty } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      prdQty,
    });

    const product = await newProduct.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
