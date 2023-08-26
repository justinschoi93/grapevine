const mongoose = require('mongoose');
const { Schema, Types } = require('mongoose');

//reaction Schema

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
        get: ( date ) => date.toLocaleDateString()
    }
},
{
    toJSON: {
        getters: true,
    },
    id: false,
})

module.exports = reactionSchema;
