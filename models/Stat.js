//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const mongoose = require('mongoose');


//=====================================================================================================================
// Create a new object from the mongoose Schema constructor object.  
// This creates the mongoDB document.
//=====================================================================================================================

var Schema = mongoose.Schema;

const StatSchema = new Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // },  
    streak: {
        type: String,
    },
    score: {
        type: Number,
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

const Stat = mongoose.model("Stat", StatSchema)


//=====================================================================================================================
// Make the model available for export.
//=====================================================================================================================

module.exports = Stat;