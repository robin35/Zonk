const mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new object from the Schema constructor
const StatsSchema = new Schema({
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

// Create the model using mongoose's model method
const Stats = mongoose.model("Stats", StatsSchema)

// Export the model
module.exports = Stats;