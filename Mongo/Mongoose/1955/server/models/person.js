
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/person_DB', {useNewUrlParser: true});
const PersonSchema = new mongoose.Schema({ /////////messages///////////
    name: {type: String, required: [true, "A name is required"]},
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Person = mongoose.model('Person', PersonSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Person;