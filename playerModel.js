var mongoose = require('mongoose');

// schema
var playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    rushingYards: {
        type: Number,
        required: true
    },
    touchdownThrown: {
        type: Number,
        required: true
    },
    sacks: {
        type: Number,
        required: true
    },
    madeFieldGoals: {
        type: Number,
        required: true
    },
    missedFieldGoals: {
        type: Number,
        required: true
    },
    catchesMade: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Player Model
var Player = module.exports = mongoose.model('player', playerSchema);

module.exports.get = function (callback, limit) {
    Player.find(callback).limit(limit);
}
