const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//user Schema for User model

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w_\.-]+)@([\w_\.-]+)\.([a-z]{2,6})$/, 'Please use a valid email address.']
        
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: {
        virutals: true,
        getters: true
    }
});


//Setting Virtual and getter

userSchema
    .virtual('friendCount')
    .get(function(){return this.friends.length});

//Creating User model

const User = mongoose.model('User', userSchema);




//Exported `User`

module.exports = User;