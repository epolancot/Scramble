const Scramble = require('../models/scramble')
const functionCheck = require('../config/functions')

module.exports = {
    index,
    participate,
    join
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
    let description, sTitle, userFirstName, avatar = ""
    const idx = req.params.id
    const userFullName = res.locals.user.name
    avatar = res.locals.user.avatar
    userFirstName = functionCheck.prepareUserName(userFullName)

    try {
        const scramble = await Scramble.findById(idx)
        description = scramble.description
        sTitle = scramble.title

        res.render('scrambles/participant-edit', {
            title: "Join",
            homeTab: "",
            newTab: "",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
            scramble: scramble,
            sTitle: sTitle,
            description: description,
            id: idx
        })
    } catch (err) {
        console.log(err)
    }
}

async function join(req, res){
    const idx = req.params.id
    let newParticipantID = res.locals.user._id
    let answer = req.body.answer
    let newAnswer = {}

    try {
        const scramble = await Scramble.findById(idx)

        newAnswer = {
            number: scramble.answers.length+1,
            text: answer,
            postedBy: newParticipantID
        }
        await Scramble.findOneAndUpdate({_id:idx},{$push: {answers:newAnswer, participants:newParticipantID}})

        res.redirect('/scrambles')

    } catch (err) {
        console.log(err)
    }
}