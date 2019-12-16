const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: connection
  })
}));

// app.use(function (req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
  });

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/api/users');

app.use('/exercises', exercisesRouter);
app.use('/api', usersRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  })
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
