const Scramble = require('../models/scramble')
const User = require('../controllers/users')

module.exports = {
    index,
    friendsIndex,
}

function index(req, res) {
    res.render('users/index', {
        title: "Friends",
        homeTab: "",
        newTab: "",
        friendsTab: "",
    })
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