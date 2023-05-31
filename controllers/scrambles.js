const Scramble = require('../models/scramble')
const functionCheck = require('../config/functions')

module.exports = {
    index,
    newView,
    create,
    showScramble
}

async function index(req, res) {
    try {
        const scrambles = await Scramble.find({})
        const userFullName = res.locals.user.name
        const avatar = res.locals.user.avatar
        const userFirstName = functionCheck.prepareUserName(userFullName)
        res.render('scrambles/index', {
            title: "Scramble",
            homeTab: "active",
            newTab: "",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
            scrambles: scrambles
        })
    } catch (err) {
        console.log(err)
    }

}

async function newView(req, res) {
    try {
        const userFullName = res.locals.user.name
        const avatar = res.locals.user.avatar
        const userFirstName = functionCheck.prepareUserName(userFullName)
        res.render('scrambles/new', {
            title: "New Scramble",
            homeTab: "",
            newTab: "active",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
        });  
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const newScramble = req.body
        await Scramble.create(newScramble)
        res.redirect('/scrambles');  
    } catch (err) {
        console.log(err)
    }
}

async function showScramble(req, res) {
    try {
        const userFullName = res.locals.user.name
        const avatar = res.locals.user.avatar
        const userFirstName = functionCheck.prepareUserName(userFullName)
        const scramble = await Scramble.findById(req.params.id)
        res.render('scrambles/view', {
            title: "Scramble",
            homeTab: "active",
            newTab: "",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
            scramble: scramble
        });  
    } catch (err) {
        console.log(err)
    }
}
