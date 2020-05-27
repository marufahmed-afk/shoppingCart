const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  products: [
    {
      productId: Number,
      quantity: Number,
      name: String,
      price: Number,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
  },
});

module.exports = mongoose.model("order", OrderSchema);
