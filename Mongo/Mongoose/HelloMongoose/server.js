
//////////IMPORTS//////////
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const session = require('express-session'); 
const flash = require('express-flash');
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
mongoose.connect('mongodb://localhost/user_DB', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({ /////////DB schema
    name: String,
    age: Number
})
   // create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);
//////////////init DB//////////////


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
app.get('/', (req, res) => {
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});
app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});


/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));