
//////////IMPORTS//////////
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const session = require('express-session'); 
const flash = require('express-flash');
const moment = require("moment");
//////////IMPORTS//////////

//////////STATIC FOLDERS//////////
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views'); 
app.use(express.urlencoded({extended: true})); 
//////////STATIC FOLDERS////////// 

///////////////////////SESSION COOKIE///////////////////////
app.use(session({
    secret: 'keyboardkitteh', 
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
///////////////////////SESSION COOKIE///////////////////////

//////////////init DB//////////////

//////////////init DB//////////////


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////

require('./server/config/routes.js')(app)

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));