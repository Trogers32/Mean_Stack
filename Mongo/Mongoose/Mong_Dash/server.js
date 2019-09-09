
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
mongoose.connect('mongodb://localhost/animal_DB', {useNewUrlParser: true});
const AnimalSchema = new mongoose.Schema({ /////////DB schema
    name: String,
    kind: String,
    desc: String,
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Animals = mongoose.model('Animal', AnimalSchema);
//////////////init DB//////////////


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
app.get('/', (req, res) => {
    Animals.find()
        .then(data => res.render("index", {anis: data, moment: moment}))
        .catch(err => res.json(err));
});

app.get('/animals/new', (req, res) => {
    Animals.find()
        .then(data => res.render("add", {anis: data, moment: moment}))
        .catch(err => res.json(err));
});

app.get('/animals/:id', (req, res) => {
    Animals.findById( req.params.id )
        .then(data => res.render("indi", {anis: data, moment: moment}))
        .catch(err => res.json(err));
});

app.post('/add', (req, res) => {
    const ani = new Animals(req.body);
    ani.save()
        .then(() => res.redirect('/'))
        .catch(err => { /////////////////validation return on error
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/animals/new');
        });
});

app.get('/animals/edit/:id', (req, res) => {
    Animals.findById( req.params.id )
        .then(data => res.render("edit", {anis: data, moment: moment}))
        .catch(err => res.json(err));
});

app.get('/animals/destroy/:id', (req, res) => {
    var ender = Animals.findById( req.params.id );
    ender.remove()
        .then(res.redirect("/"))
});

app.post('/animals/update/:id', (req, res) => {
    var ed = Animals.findById( req.params.id )
    ed.update({$set:{name:req.body.name, kind:req.body.kind, desc:req.body.desc}})
        .then(res.redirect("/"))
        .catch(err => res.json(err));
});

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));