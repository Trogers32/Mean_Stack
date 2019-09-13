

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
        Task.create(req.body)
        .then(data => res.json(data))
        // .then(res.redirect(`/${tid.id}`))
        .catch(err => res.json(err));
    },
    rid: function(req, res) { /////remove Task
        Task.deleteOne({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    upTask: function(req, res) { ///get single Task info
        console.log(req.body)
        Task.updateOne({_id:req.params.id},{$set:{title:req.body.title,description:req.body.description,complete:req.body.complete}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
        // let id = req.params.id;
        // Task.findById(id, function(err, task){
        //     if(err){
        //         res.json({message: "Error!", error: err});
        //     }
        //     else{
        //         if(req.body.title){
        //             task.title = req.body.title;
        //         }
        //         if(req.body.description){
        //             task.description = req.body.description;
        //         }
        //         if(req.body.completed){
        //             task.completed = req.body.completed;
        //     }
        //     task.save(function(err){
        //         if(err){
        //             res.json({message: "Error!", error: err});
        //         }
        //         else{
        //             res.json({message: "Success!", task: task})
        //         }
        //     })
        //     }
        // })
    },
    getTask: function(req, res) { ///get single Task info
        Task.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






