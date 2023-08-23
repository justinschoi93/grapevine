const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        //Mongoose's OBjectId data type
        //default: new ObjectId
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
})

//How do we use the above schema as a subdocument within the reaction field of the Thought model?