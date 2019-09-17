
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/author_DB', {useNewUrlParser: true});
const AuthorSchema = new mongoose.Schema({ /////////Authors///////////
    name: {type: String, required: [true, "An author name is required"], min:[3, "Author name must be at least 3 characters."]},
    quote: {type: String, required: [true, "A quote is required"], min:[3, "Quotes need to be at least 3 characters."]},
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Author = mongoose.model('Author', AuthorSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Author;