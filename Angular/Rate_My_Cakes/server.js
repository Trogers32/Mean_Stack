
//////////IMPORTS//////////
const express = require("express");
const app = express();
const session = require('express-session'); 
const flash = require('express-flash');
const bodyParser = require("body-parser");
//////////IMPORTS//////////

//////////STATIC FOLDERS//////////
app.use(flash());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' )); /////COMMENT OUT IF TESTING VIA POSTMAN
// app.use(bodyParser.urlencoded({useNewUrlParser: true}));    //////OLD NO LONGER NEEDED --- use app.use(express.urlencoded({extended: true})); && app.use(express.json()); 
//////////STATIC FOLDERS////////// 

///////////////////////SESSION COOKIE///////////////////////
app.use(session({
    secret: 'keyboardkitteh', 
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
///////////////////////SESSION COOKIE///////////////////////

/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
require('./server/config/routes.js')(app)

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));