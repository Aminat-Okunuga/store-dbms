const express = require("express");
const Router = express.Router();
const model = require("./model");

// add data
exports.createEntry = async (req, res) => {
  const data = await model.create(req.body);
  res.status(201).json(data);
};

//all data
exports.getAllEntry = async (req, res) => {
  const data = await model.find();
  res.status(200).json({
    developer: "AminatCanCode",
    report: true,
    totalData: data.length + 1,
    data: data,
  });
};
// find an item
exports.getSingleEntry = async (req, res) => {
  const data = await model.findById(req.params.id);
  res.status(200).json(data);
};

// update an item
exports.updateSingleEntry = async (req, res) => {
  const data = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    report: "Item sucessfully updated!",
    data: data,
  });
};

// delete data
exports.deleteSingleEntry = async (req, res) => {
  const data = await model.findByIdAndDelete(req.params.id, req.body);
  res.status(200).json("Item successfully deleted!");
};
