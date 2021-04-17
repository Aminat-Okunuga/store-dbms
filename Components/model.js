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
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  quantity: {
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
  size: {
    type: String,
  }
  
});

// export file
module.exports = mongoose.model("teebums", structure);
