

const Task = require("../models/task.js");
//////////IMPORTS//////////
const express = require("express");
const app = express();
const flash = require('express-flash');
const moment = require("moment");
//////////IMPORTS//////////
//////////STATIC FOLDERS//////////
app.use(flash());
app.use(express.json()); 
//////////STATIC FOLDERS////////// 

module.exports = {
    index: function(req, res) {
        Task.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newTask: function(req, res) { //////add new Task
        var tid = Task.create(req.body)
        .then(data => res.json(data))
        // .then(res.redirect(`/${tid.id}`))
        .catch(err => res.json(err));
    },
    rid: function(req, res) { /////remove Task
        Task.deleteOne({_id:req.params.id})
        .then(res.redirect("/"))
        .catch(err => res.json(err));
    },
    upTask: function(req, res) { ///get single Task info
        Task.findOneAndUpdate({_id:req.params.id},{$set:{title:req.body.title,description:req.body.description,complete:req.body.complete}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    getTask: function(req, res) { ///get single Task info
        Task.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






