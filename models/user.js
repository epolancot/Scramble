const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    age: Number,
    avatar: String,
    email: String,
    friends: [{type: mongoose.Schema.Types.ObjectId}],
    location: String,
    scrambles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Scrambles"  
        }
    ],
    settings: {}
},
{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);