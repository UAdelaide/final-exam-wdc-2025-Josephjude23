const express = require('express');
const path = require('path');
const session = require('express-session'); // ✅ Add this
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle form POST data (from login form)


app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: false
}));


app.use(express.static(path.join(__dirname, '/public')));

const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);
app.use('/', userRoutes);


module.exports = app;
