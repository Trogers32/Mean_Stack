

const controller = require("../controllers/controller.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/authors', (req, res) => {
        controller.index(req,res);
    });
    app.post('/authors', (req, res) => {
        controller.newCake(req,res);
    });
    app.post('/authors/:id', (req, res) => { /////new comment
        controller.newComment(req,res);
    });
    app.get('/authors/:id', (req, res) => {
        controller.getCake(req,res);
    });
    // app.put('/authors/:id', (req, res) => {
    //     controller.upCake(req,res);
    // });
    app.delete('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../../public/dist/public/index.html"))
    });
    // app.use(function(req,res) { 
    //     res.redirect('/'); 
    // }); 
}    