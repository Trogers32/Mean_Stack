 

const controller = require("../controllers/controller.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/Authors', (req, res) => {
        controller.index(req,res);
    });
    app.post('/Authors', (req, res) => {
        controller.newAuthor(req,res);
    });
    app.get('/Authors/:id', (req, res) => {
        controller.getAuthor(req,res); 
    });
    app.put('/Authors/up/:cid', (req, res) => {
        controller.rateUpComment(req,res); 
    });
    app.put('/Auth/:id', (req, res) => {
        controller.editAuthor(req,res); 
    });
    app.put('/Authors/down/:cid', (req, res) => {
        controller.rateDownComment(req,res); 
    });
    app.put('/Authors/:id', (req, res) => {
        controller.upAuthor(req,res);
    });
    app.delete('/remove/:id/:cid', (req, res) => {
        controller.rid(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}    