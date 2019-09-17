
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/author_DB', {useNewUrlParser: true});
const AuthorSchema = new mongoose.Schema({ /////////Authors///////////
    baker: {type: String, required: [true, "A baker name is required"]},
    imageURL: {type: String, required: [true, "An author image is required"]},
    rating: [RatingSchema],
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Author = mongoose.model('Author', AuthorSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Author;