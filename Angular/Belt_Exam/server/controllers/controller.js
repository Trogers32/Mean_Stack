 

const Author = require("../models/model.js");
//////////IMPORTS//////////
const express = require("express");
const app = express();
//////////IMPORTS//////////
//////////STATIC FOLDERS//////////
app.use(express.json()); 
//////////STATIC FOLDERS////////// 

module.exports = {
    index: function(req, res) {
        Author.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newAuthor: function(req, res) { //////add new Author
        Author.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rid: function(req, res) { /////remove Author
        Author.updateOne({_id:req.params.id}, {$pull: {quotes:{_id:req.params.cid}}})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    upAuthor: function(req, res) {
        Author.updateOne({_id:req.params.id},{$push:{quotes:{content:req.body.content}}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    editAuthor: function(req, res) {
        Author.updateOne({_id:req.params.id},{$set:{name: req.body.name}},{runValidators:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rateUpComment: function(req, res) {
        Author.updateOne({"quotes._id":req.params.cid},{$inc:{"quotes.$.rating":1}})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    rateDownComment: function(req, res) {
        Author.updateOne({"quotes._id":req.params.cid},{$inc:{"quotes.$.rating":-1}})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    getAuthor: function(req, res) { ///get single Author info
        Author.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






