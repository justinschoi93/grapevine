const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //Use getter method to format timestamp on query
    }
},
{
    toJSON: {
        getters: true,
    },
    id: false,
})

module.exports = reactionSchema;
//How do we use the above schema as a subdocument within the reaction field of the Thought model?