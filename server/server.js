require('dotenv').config();
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const session = require('express-session');
const db = require('./db');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
	session({
		secret: process.env.APP_SECRET,
		store: new MongoStore({ mongooseConnection: db }),
		resave: false,
		saveUninitialized: false
	})
)

app.use(passport.initialize())
app.use(passport.session()) 

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});