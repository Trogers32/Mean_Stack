

const controller = require("../controllers/cakes.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/cakes', (req, res) => {
        controller.index(req,res);
    });
    app.post('/cakes', (req, res) => {
        controller.newCake(req,res);
    });
    app.post('/cakes/:id', (req, res) => { /////new comment
        controller.newComment(req,res);
    });
    app.get('/cakes/:id', (req, res) => {
        controller.getCake(req,res);
    });
    // app.put('/cakes/:id', (req, res) => {
    //     controller.upCake(req,res);
    // });
    app.delete('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
}    