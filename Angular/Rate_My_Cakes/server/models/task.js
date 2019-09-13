
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/task_DB', {useNewUrlParser: true});
const TaskSchema = new mongoose.Schema({ /////////messages///////////
    title: {type: String, required: [true, "A title is required"]},
    description: {type: String, default:""},
    complete: {type: Boolean, default:false},
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Task = mongoose.model('Task', TaskSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Task;