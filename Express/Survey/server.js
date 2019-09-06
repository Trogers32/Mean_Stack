const express = require("express");
const app = express();
const session = require('express-session'); //////////IMPORTS

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //////////STATIC FOLDERS
app.use(express.urlencoded({extended: true}));


/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////
app.get('/', (req, res) => {
    res.render('index');  
});
app.post('/submit', (req, res) => {
    if (req.body.comment == ''){
        var resu ={
            name:req.body.fullName, 
            loc:req.body.loc, 
            lang:req.body.lang, 
            comment:""
        };
        res.render('result', {results:resu});  
    }
    var resu ={
        name:req.body.fullName, 
        loc:req.body.loc, 
        lang:req.body.lang, 
        comment:req.body.comment
    };
    res.render('result', {results:resu});  
});
app.get('/reset', (req, res) => {
    req.session.count = 0;
    res.redirect('/');  
});

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));