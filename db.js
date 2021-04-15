const express = require("express");
const mongoose = require("mongoose");
const port = 22400;

// db url
const LOCAL_DB = "mongodb://localhost/teebums";
const ONLINE_DB = "mongodb://localhost/teebums";

// server declaration
const app = express();
app.use(express.json());

//connect to db
mongoose
  .connect(LOCAL_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection to the database established");
  });

//   import model
const myData = require("./Components/model");

// read data
app.get("/", async (req, res) => {
  const newData = await myData.find();
  res.status(200).json(newData);
});
// find data
app.get("/:id", async (req, res) => {
  const newData = await myData.findById(req.params.id);
  res.status(200).json(newData);
});
// update data
app.patch("/:id", async (req, res) => {
  const newData = await myData.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(newData);
});

// delete data
app.delete("/:id", async (req, res) => {
  const newData = await myData.findByIdAndDelete(req.params.id, req.body);
  res.status(200).json("Deleted!");
});

// add data
app.post("/", async (req, res) => {
  const newData = new myData({
    name: req.body.name,
  });
  const saveData = await newData.save();
  res.status(201).json(saveData);
});
// listen to port
app.listen(port, () => {
  console.log(`${port}`);
});
