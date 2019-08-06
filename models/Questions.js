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
    choiceA: {
        type: String,
        required: true
    },
    choiceB: {
        type: String,
        required: true
    },
    choiceC: {
        type: String,
        required: true 
    },
    choiceD: {
        type: String,
        required: true
    },
    correctA: {
        type: Boolean,
        required: true
    },
    correctB: {
        type: Boolean,
        required: true
    },
    correctC: {
        type: Boolean,
        required: true
    },
    correctD: {
        type: Boolean,
        required: true
    }
});

module.exports = Questions = mongoose.model('questions', QuestionsSchema);