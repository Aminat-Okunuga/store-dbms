const express = require("express");
const Router = epress.Router();

const { getAllEntry } = require("./view");

Router.route("/").get(getAllEntry);

module.exports = Router;
