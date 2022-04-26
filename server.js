require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const mongoose = require("mongoose");
// const session = require('express-session');
// const UserRouter = require('./controllers/user');
const morgan = require("morgan"); //import morgan



require('./database');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

//Establish Database Connection
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));




const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

