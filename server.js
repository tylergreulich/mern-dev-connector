const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const auth = require('./routes/api/auth');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

// gives access to req.body....
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const keys = require('./config/keys');

const MONGO_URI = mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

app.use('/api/auth', auth);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(`${port}`, () => {
  console.log(`Listening on Port ${port}`);
});
