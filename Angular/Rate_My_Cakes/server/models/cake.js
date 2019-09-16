
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/cake_DB', {useNewUrlParser: true});
const RatingSchema = new mongoose.Schema({ /////////comments///////////
    rate: {type: Number, min: [1, "Rating must be greater than or equal to 1."], max:[5,"Rating must be less than or equal to 5"]},
    comment: {type: String, default:"Default comment."},
},{timestamps:true})
const CakeSchema = new mongoose.Schema({ /////////messages///////////
    baker: {type: String, required: [true, "A baker name is required"]},
    imageURL: {type: String, required: [true, "A cake image is required"]},
    rating: [RatingSchema],
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Cake = mongoose.model('Cake', CakeSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Cake;