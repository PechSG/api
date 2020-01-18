const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

var whitelist = ['http://localhost:3000', 'http://pichsaving.herokuapp.com'];

var corsOptions = {
  origin: whitelist,
  credentials: true
}
// app.options('/products/:id', cors(corsOptions)) // enable pre-flight request for DELETE request

app.use(cors(corsOptions));

app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// https://www.npmjs.com/package/cors#enabling-cors-pre-flight
app.options('*', cors(corsOptions))

// app.use(express.cookieParser());
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000*60*60*24*30}, //30 days
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
  console.log(req.session)
  res.status(err.status || 500);
  res.send(err.message);
});

// https://www.npmjs.com/package/cors#enabling-cors-pre-flight
// app.options('*', cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  })
}

app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/api/users');

app.use('/exercises', exercisesRouter);
app.use('/api', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
