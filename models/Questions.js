const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema({
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

module.exports = Questions = mongoose.model('questions', QuestionsSchema);