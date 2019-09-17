

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
        console.log(req.body)
        Author.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newComment: function(req, res) { //////add new Author
        var rating = parseInt(req.body.rate);
        if(rating){
            Author.updateOne({_id:req.params.id},{$push:{rating:{rate:rating,comment:req.body.comment}}},{runValidators:true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
        } else {
            var err = "Rating must be a number.";
            res.json(err);
        }
    },
    rid: function(req, res) { /////remove Author
        Author.deleteOne({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    // upAuthor: function(req, res) {
    //     console.log(req.body)
    //     Author.updateOne({_id:req.params.id},{$set:{title:req.body.baker,imageURL:req.body.imageURL}},{runValidators:true})
    //     .then(data => res.json(data))
    //     .catch(err => res.json(err));
    // },
    getAuthor: function(req, res) { ///get single Author info
        Author.find({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






