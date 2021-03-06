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
    cookie: { maxAge: 60000 }
}))


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
app.get('/', (request, response) => {
    console.log(request.session.cookie);
    response.render('index');
});
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/cars", (req, res) => {
    res.render('cars');
})
app.get("/cars/new", (req, res) => {
    res.render('form');
})
app.get("/cats/:id", (req, res) => {
    // hard-coded user data
    if(req.params.id === '1'){
        var kran = {name: "Kran", age: 6, sleep: ["Under the bed.", "On the window sill."], u:"/d1.jpg"};
        res.render('kran', {kran: kran});
    } else if (req.params.id === '2'){
        var kran = {name: "Phillip", age: 2, sleep: ["Under the bed.", "On the window sill."], u:"/d2.jpg"};
        res.render('kran', {kran: kran});
    } else if (req.params.id === '3'){
        var kran = {name: "frank", age: 2, sleep: ["Under the bed.", "On the window sill."], u:"/d3.jpg"};
        res.render('kran', {kran: kran});
    } else {
        var kran = {name: "Tom", age: 2, sleep: ["Under the bed.", "On the window sill."], u:"/d4.jpg"};
        res.render('kran', {kran: kran});
        console.log(req.params);
    }
})

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));