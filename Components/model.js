const mongoose = require("mongoose");
// schema definition
const structure = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: [true, "Name already exists"],
  },
  code: {
    type: String,
    require: true,
    unique: [true, "Code already exists"],
  },
  Brand: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Quantity: {
    type: Number,
    require: true,
  },
  unit: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

// export file
module.exports = mongoose.model("teebums", structure);
