//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const mongoose = require('mongoose');


//=====================================================================================================================
// Create a new object from the mongoose Schema constructor object.  
// This creates the mongoDB document.
//=====================================================================================================================

var Schema = mongoose.Schema;

const UserSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


//=====================================================================================================================
// Call the mongoose.model() method.  The method makes a copy of the schema and compiles a model from it.
// It takes 2 arguments:
//  - the first argument is the model name (which is the singular name of the mongoDB collection you want to access);
//    mongoose automatically looks for the plural, lowercased version of the model name
//  - the second argument is the name of the schema that will be copied
//=====================================================================================================================

const User = mongoose.model("User", UserSchema)


//=====================================================================================================================
// Make the model available for export.
//=====================================================================================================================

module.exports = User;