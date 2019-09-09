
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
app.set('views', __dirname + '/views'); 
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
mongoose.connect('mongodb://localhost/quote_DB', {useNewUrlParser: true});
const quoteSchema = new mongoose.Schema({ /////////DB schema
    name: String,
    quo: String,
    createdAt: { type: Date, default: Date.now }
})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', quoteSchema);
//////////////init DB//////////////


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
app.get('/', (req, res) => {
    res.render("index");
});
app.post('/quos', (req, res) => {
    const quo = new Quote(req.body);
    quo.save()
        .then(() => res.redirect('/quotes'))
        .catch(err => { /////////////////validation return on error
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});
app.get('/quotes', (req, res) => {
    Quote.find().sort('-createdAt')
        .then(data => res.render("quotes", {Quote: data, moment: moment}))
        .catch(err => res.json(err));
});


/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));