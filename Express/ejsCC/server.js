const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (request, response) => {
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
app.get("/kran", (req, res) => {
    // hard-coded user data
    var kran = {name: "Kran", age: 6, sleep: ["Under the bed.", "On the window sill."], u:"/d1.jpg"};
    res.render('kran', {kran: kran});
})
app.get("/phillip", (req, res) => {
    // hard-coded user data
    var kran = {name: "Phillip", age: 2, sleep: ["Under the bed.", "On the window sill."], u:"/d2.jpg"};
    res.render('kran', {kran: kran});
})
app.get("/frank", (req, res) => {
    // hard-coded user data
    var kran = {name: "frank", age: 2, sleep: ["Under the bed.", "On the window sill."], u:"/d3.jpg"};
    res.render('kran', {kran: kran});
})
app.get("/tom", (req, res) => {
    // hard-coded user data
    var kran = {name: "Tom", age: 2, sleep: ["Under the bed.", "On the window sill."], u:"/d4.jpg"};
    res.render('kran', {kran: kran});
})
app.listen(8000, () => console.log("listening on port 8000"));