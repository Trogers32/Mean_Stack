 
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/Author_DB', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({ /////////Authors///////////
    content: {type: String, required: [true, "A quote is required"], minlength:[3, "Quotes must be at least 3 characters long."]},
    rating: {type: Number, default:0},
},{timestamps:true})
const AuthorSchema = new mongoose.Schema({ /////////Authors///////////
    name: {type: String, required: [true, "An author name is required"], minlength:[3, "Author name must be at least 3 characters long."]},
    quotes: [QuoteSchema],
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Author = mongoose.model('Author', AuthorSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Author;