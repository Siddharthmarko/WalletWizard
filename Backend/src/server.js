const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const mongoose = require("mongoose");
require("dotenv").config(); 
const path = require("path");
const router = require(path.join(__dirname, "./routes/router.js"));
const PORT = process.env.PORT;
const DB = process.env.DB;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(router);
mongoose
    .connect(DB)
    .then(() => console.log('mongodb is connected'))
    .catch((err) => console.log('Error connecting to mongodb', err));

app.listen(PORT, () => console.log('server running at 9018 '))