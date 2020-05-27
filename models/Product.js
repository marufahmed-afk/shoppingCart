const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  prdQty: {
    type: Number,
  },
});

module.exports = mongoose.model("product", ProductSchema);
