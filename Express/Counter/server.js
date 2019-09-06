const express = require("express");
const app = express();
const session = require('express-session'); //////////IMPORTS

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //////////STATIC FOLDERS

app.use(session({
    secret: 'keyboardkitteh', ///////////////////////SESSION COOKIE
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
app.get('/', (req, res) => {
    if(req.session.count){
        req.session.count = req.session.count+1;
        res.locals.counter = req.session.count;
        res.render('index'); 
    } else {
        req.session.count = 1;
        res.locals.counter = req.session.count;
        res.render('index');  
    }
});
app.get('/add2', (req, res) => {
    req.session.count++;
    res.redirect('/');  
});
app.get('/reset', (req, res) => {
    req.session.count = 0;
    res.redirect('/');  
});

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));