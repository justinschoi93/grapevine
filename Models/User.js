const mongoose = require('mongoose');

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
        set: toLower,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        // Will the above check for a match before or after the string has been set toLower?
        //-/^([/w]{#ofChars})\@([/w]{#ofChars})\.([a-z]{3})\/$/
        //must be valid email
    },
    thoughts: {
        //array of _id values
        //references thought model
    },
    friends: {
        //array of _id values
        //references friends model
    }
});

//Gave schema instance methods
userSchema.methods.putMethodNameHere = function (){};

//Created a model named `User`
const User = mongoose.model('User', userSchema);




//Exported `User`

module.exports = User;