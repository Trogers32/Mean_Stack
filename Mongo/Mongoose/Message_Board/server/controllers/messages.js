

const Message = require("../models/message.js");
//////////IMPORTS//////////
const express = require("express");
const app = express();
const flash = require('express-flash');
const moment = require("moment");
//////////IMPORTS//////////
//////////STATIC FOLDERS//////////
app.use(flash());
app.use(express.urlencoded({extended: true})); 
//////////STATIC FOLDERS////////// 

module.exports = {
    index: function(req, res) {
        Message.find()
        .then(data => res.render("index", {mess: data, moment: moment}))
        .catch(err => res.json(err));
    },
    poster: function(req, res) {
        const mess = new Message(req.body);
        mess.save()
            .then(() => res.redirect('/'))
            .catch(err => { /////////////////validation return on error
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            });
    },
    comment: function(req, res) {
        const comme = new Comment(req.body);
        comme.save()
            .then(() => Message.update({_id:req.params.id}, {$push: {comm:comme}}))
            .then(() =>res.redirect('/'))
            .catch(err => { /////////////////validation return on error
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            });
    }
};






