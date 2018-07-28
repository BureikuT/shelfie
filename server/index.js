const express = require("express");
const bodyParser = require("body-parser");

const massive = require("massive");
require("dotenv").config();
import axios from 'axios'

const app = express();

app.use(bodyParser.json());

const controller = require("./controller");

massive(process.env.CONNECTIONSTRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to database");
  })

  .catch(err => {
    console.log(err.message);
  });

  app.delete('/api/product/:id', controller.deleteProduct)
  app.get


app.listen(3001, () => {
  console.log(`Server listening on port 3001`);
});
