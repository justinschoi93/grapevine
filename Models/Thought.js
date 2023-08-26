const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

//thought Schema for Thought model

const thoughtSchema = new mongoose.Schema({
    thoughtText:{
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleDateString()
    },
    username:{
        type: String,
        required: true
    },
    reactions:[reactionSchema],   
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);

thoughtSchema
    .virtual('reactionCount')
    .get(function(){this.reactions.length})

//Creating Thought model

const Thought = mongoose.model('Thought', thoughtSchema);

//Exported `Thought`
module.exports = Thought;