const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const port = 22400;

// db url
// const LOCAL_DB = "mongodb://localhost/teebums";
const ONLINE_DB = "mongodb+srv://AminatOkunuga:AminatOkunuga@cluster0.l0t8b.mongodb.net/teebums_gallery?retryWrites=true&w=majority";

// server declaration
const app = express();
app.use(express.json());

//connect to db
mongoose
  .connect(ONLINE_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection to the database established");
  });


  app.use(cors());
  app.use(express.json());
  app.use("/", require("./Components/controller"));


// listen to port
app.listen(port, () => {
  console.log(`${port}`);
});
