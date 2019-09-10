
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/comment_DB', {useNewUrlParser: true});
const CommentSchema = new mongoose.Schema({ /////////comments///////////
    name: {type: String, required: [true, "A name is required"]},
    content: {type: String, required: [true, "A comment is required"]},
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Comment = mongoose.model('Comment', CommentSchema);

const MessageSchema = new mongoose.Schema({ /////////messages///////////
    name: {type: String, required: [true, "A name is required"]},
    content: {type: String, required: [true, "A message is required"]},
    comm: [CommentSchema],
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Message = mongoose.model('Message', MessageSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Message;