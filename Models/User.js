const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// Defined Schema
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
        match: /^([\w_\.-]+)@([\w_\.-]+)\.([a-z\.]{2,6})$/
        // Will the above check for a match before or after the string has been set toLower?
        //-/^([/w]{#ofChars})\@([/w]{#ofChars})\.([a-z]{3})\/$/
        //must be valid email
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
});


//Setting Virtual
userSchema
    .virtual('friendCount')
    .get(()=>{
        return this.friends.length;
    })

//Created a model named `User`
const User = mongoose.model('User', userSchema);




//Exported `User`

module.exports = User;