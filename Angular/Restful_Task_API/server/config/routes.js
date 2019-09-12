

const controller = require("../controllers/tasks.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/task', (req, res) => {
        controller.index(req,res);
    });
    app.post('/task', (req, res) => {
        controller.newTask(req,res);
    });
    app.get('/task/:id', (req, res) => {
        controller.getTask(req,res);
    });
    app.put('/task/:id', (req, res) => {
        controller.upTask(req,res);
    });
    app.get('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
}    