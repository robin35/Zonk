const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bestScore: {
        type: Number,
    },
    currentScore: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Stats = mongoose.model('stats', StatsSchema);