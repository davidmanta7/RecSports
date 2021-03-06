const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const listings = require('./routes/api/listings');

const app = express();

//Body parser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./../config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/listings', listings);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port',port));
