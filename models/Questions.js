const mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new object from the Schema constructor
const QuestionsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    topic: {
        type: String,
        required: true     
    },
    question: {
        type: String,
        required: true     
    },
    answerA: {
        type: String,
        required: true
    },
    answerB: {
        type: String,
        required: true
    },
    answerC: {
        type: String,
        required: true 
    },
    answerD: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    }
});


// Create the model using mongoose's model method
const Questions = mongoose.model("Questions", QuestionsSchema)

// Export the model
module.exports = Questions;