

const Person = require("../models/person.js");
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
        Person.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newPerson: function(req, res) { //////add new person
        Person.create({name:req.params.name})
        .then(res.redirect(`/${req.params.name}`))
        .catch(err => res.json(err));
    },
    rid: function(req, res) { /////remove person
        Person.deleteOne({name:req.params.name})
        .then(res.redirect("/"))
        .catch(err => res.json(err));
    },
    getPerson: function(req, res) { ///get single person info
        Person.find({name:req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






