const mongoose = require('mongoose');

const ScrambleSchema = new mongoose.Schema({
    title: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    settings: {
    },
    answers: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    participants: []
},
{
    timestamps: true
});

module.exports = mongoose.model("Scramble", ScrambleSchema);