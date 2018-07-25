const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

console.log('Config is:   ', config.database);

mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database' + config.database);
});

//on error
mongoose.connection.on('error', (err) => {
    console.log('database error:' + err);
});


const app = express();

const users = require('./routes/users');
const products=require('./routes/products');

const port = 3000;


app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyparser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//more routes

app.use('/users', users);
app.use('/products',products);

app.get('/*/*', (req, res) => {
    res.render('./public/index.html');
});

app.listen(port, () => {
    console.log('server started on port' + port);
});