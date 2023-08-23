const mongoose = require('mongoose');

//Defined schema
const thoughtSchema = new mongoose.Schema({
    thoughtText:{
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        //format time stamp on query?
    },
    username:{
        type: String,
        required: true
    },
    reactions:{
        //array of nested documents created with reactionSchema
    }
});


//Added instance method to schema
thoughtSchema.methods.nameOfMethodHere = function (){};

//Created `Thought` model, using thoughtSchema
const Thought = mongoose.model('Thought', thoughtSchema);

//Exported `Thought`
module.exports = Thought;