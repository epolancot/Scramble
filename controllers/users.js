const Scramble = require('../models/scramble')
const User = require('../controllers/users')

module.exports = {
    friendsIndex,
}

async function friendsIndex(req, res) {
    try {
        //const users = await User.find({})
        res.render('users/friends/index', {
            title: "Friends",
            homeTab: "",
            newTab: "",
            friendsTab: "active",
        })
    } catch (err) {
        console.log(err)
    }
}