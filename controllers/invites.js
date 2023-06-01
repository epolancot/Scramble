const Scramble = require('../models/scramble')
const functionCheck = require('../config/functions')

module.exports = {
    index,
    participate
}

async function index(req, res) {
    const idx = req.params.id
    try {
        const scramble = await Scramble.findById(idx)

        if (scramble === null) {
            res.redirect('/')
            return
        }
        res.render('invites/index', {
            title: "Join",
            homeTab: "",
            newTab: "",
            friendsTab: "",
            sTitle: scramble.title,
            description: scramble.description,
            id: idx
        })
    } catch (err) {
        console.log(err)
    }

}

async function participate(req, res){
    const idx = req.params.id
    const userFullName = res.locals.user.name
    const avatar = res.locals.user.avatar
    const userFirstName = functionCheck.prepareUserName(userFullName)
    console.log(idx)
    try {
        const scramble = await Scramble.findById(idx)

        res.render('scrambles/participant-edit', {
            title: "Join",
            homeTab: "",
            newTab: "",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
            scramble: scramble,
            sTitle: scramble.title,
            description: scramble.description,
            id: idx
        })
    } catch (err) {
        console.log(err)
    }
}