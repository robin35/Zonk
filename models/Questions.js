//=====================================================================================================================
// Dependencies
//=====================================================================================================================

const mongoose = require('mongoose');


//=====================================================================================================================
// Create a new object from the mongoose Schema constructor object.  
// This creates the mongoDB document.
//=====================================================================================================================

var Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true,
        unique: true
    },
    answera: {
        type: String,
        required: true
    },
    answerb: {
        type: String,
        required: true
    },
    answerc: {
        type: String,
        required: true
    },
    answerd: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    }
});


//=====================================================================================================================
// Call the mongoose.model() method.  The method makes a copy of the schema and compiles a model from it.
// It takes 2 arguments:
//  - the first argument is the model name (which is the singular name of the mongoDB collection you want to access);
//    mongoose automatically looks for the plural, lowercased version of the model name
//  - the second argument is the name of the schema that will be copied
//=====================================================================================================================

const Question = mongoose.model("Question", QuestionSchema)


//=====================================================================================================================
// Make the model available for export.
//=====================================================================================================================

module.exports = Question;