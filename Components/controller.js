const express = require("express");
const Router = express.Router();

const {
  getAllEntry,
  getSingleEntry,
  createEntry,
  updateSingleEntry,
  deleteSingleEntry,
} = require("./view");

Router.route("/").get(getAllEntry).post(createEntry);
Router.route("/:id")
  .get(getSingleEntry)
  .patch(updateSingleEntry)
  .delete(deleteSingleEntry);

module.exports = Router;
