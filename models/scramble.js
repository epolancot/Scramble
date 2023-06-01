const mongoose = require('mongoose');

const ScrambleSchema = new mongoose.Schema({
    title: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    prompt: String,
    settings: {
        locked: {
            type: Boolean,
            default: false
        }
    },
    answers: [{
        number: Number,
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }],
},
{
    timestamps: true
});

module.exports = mongoose.model("Scramble", ScrambleSchema);