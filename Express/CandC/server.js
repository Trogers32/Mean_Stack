const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(__dirname + "/static"));
app.get('/', (request, response) => {
    res.sendFile('index.html', {root: path.join(__dirname, './static')})
});
app.get("/cars", (req, res) => {
    res.sendFile('cars.html', {root: path.join(__dirname, './static')})
})
app.get("/cars/1", (req, res) => {
    res.sendFile('c1.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cars/2", (req, res) => {
    res.sendFile('c2.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cars/3", (req, res) => {
    res.sendFile('c3.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cars/4", (req, res) => {
    res.sendFile('c4.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cars/5", (req, res) => {
    res.sendFile('c5.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cars/6", (req, res) => {
    res.sendFile('c6.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cats", (req, res) => {
    res.sendFile('cats.html', {root: path.join(__dirname, './static')})
})
app.get("/cats/1", (req, res) => {
    res.sendFile('d1.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cats/2", (req, res) => {
    res.sendFile('d2.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cats/3", (req, res) => {
    res.sendFile('d3.jpg', {root: path.join(__dirname, './static')})
})
app.get("/cats/4", (req, res) => {
    res.sendFile('d4.jpg', {root: path.join(__dirname, './static')})
})
app.get("/form", (req, res) => {
    res.sendFile('form.html', {root: path.join(__dirname, './static')})
})
app.listen(8000, () => console.log("listening on port 8000"));