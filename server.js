const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users.js');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys.js').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB")})
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());
// passport config
require('./config/passport.js')(passport);

// Use routes
app.use('/api/users', users);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
