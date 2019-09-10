

const controller = require("../controllers/tasks.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/:id', (req, res) => {
        controller.getTask(req,res);
    });
    app.post('/new', (req, res) => {
        controller.newTask(req,res);
    });
    app.put('/update/:id', (req, res) => {
        controller.upTask(req,res);
    });
    app.get('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
}    