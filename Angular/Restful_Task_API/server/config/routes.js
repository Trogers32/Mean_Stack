

const controller = require("../controllers/tasks.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/tasks', (req, res) => {
        controller.index(req,res);
    });
    app.post('/tasks', (req, res) => {
        controller.newTask(req,res);
    });
    app.get('/tasks/:id', (req, res) => {
        controller.getTask(req,res);
    });
    app.put('/tasks/:id', (req, res) => {
        controller.upTask(req,res);
    });
    app.delete('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
}    