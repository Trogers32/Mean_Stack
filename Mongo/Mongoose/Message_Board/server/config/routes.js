

const controller = require("../controllers/messages.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.post('/message', (req, res) => {
        controller.poster(req,res);
    });
    app.post('/comment/:id', (req, res) => {
        controller.comment(req,res);
    });
       // all other routes
}    