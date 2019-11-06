

const Cake = require("../models/cake.js");
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
        Cake.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newCake: function(req, res) { //////add new Cake
        console.log(req.body)
        Cake.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newComment: function(req, res) { //////add new Cake
        var rating = parseInt(req.body.rate);
        if(rating){
            Cake.updateOne({_id:req.params.id},{$push:{rating:{rate:rating,comment:req.body.comment}}},{runValidators:true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
        } else {
            var err = "Rating must be a number.";
            res.json(err);
        }
    },
    rid: function(req, res) { /////remove Cake
        Cake.deleteOne({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    // upCake: function(req, res) {
    //     console.log(req.body)
    //     Cake.updateOne({_id:req.params.id},{$set:{title:req.body.baker,imageURL:req.body.imageURL}},{runValidators:true})
    //     .then(data => res.json(data))
    //     .catch(err => res.json(err));
    // },
    getCake: function(req, res) { ///get single Cake info
        Cake.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};