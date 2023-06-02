const Scramble = require('../models/scramble')
const User = require('../controllers/users')
const functionCheck = require('../config/functions')

module.exports = {
    index,
    friendsIndex,
    userProfile
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
        const userFullName = res.locals.user.name
        const avatar = res.locals.user.avatar
        const userFirstName = functionCheck.prepareUserName(userFullName)
        res.render('users/friends/index', {
            title: "Friends",
            homeTab: "",
            newTab: "",
            friendsTab: "active",
            avatar: avatar,
            name: userFirstName,
        })
    } catch (err) {
        let message = `Error: ${err}`
    }
}

async function userProfile(req, res) {
    try {
        const userFullName = res.locals.user.name
        const avatar = res.locals.user.avatar
        const userFirstName = functionCheck.prepareUserName(userFullName)

        res.render('users/profile', {
            title: "Your Profile",
            homeTab: "",
            newTab: "",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
            fullName: userFullName,
            email: res.locals.user.email,
            scramblesCreator: 0,
            scramblesParticipant: res.locals.user.scrambles.length,
            friends: res.locals.user.friends.length
        })
    } catch (err) {
        let message = `Error: ${err}`
    }
}