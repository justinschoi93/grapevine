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
    reactions:[reactionSchema],   
});

thoughtSchema
    .virtual('reactionCount')
    .get(()=>{
        return this.reactions.length;
    })

//Created `Thought` model, using thoughtSchema
const Thought = mongoose.model('Thought', thoughtSchema);

//Exported `Thought`
module.exports = Thought;