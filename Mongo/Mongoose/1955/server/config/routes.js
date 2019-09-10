

const controller = require("../controllers/people.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/new/:name', (req, res) => {
        controller.newPerson(req,res);
    });
    app.get('/remove/:name', (req, res) => {
        controller.rid(req,res);
    });
    app.get('/:name', (req, res) => {
        controller.getPerson(req,res);
    });
}    