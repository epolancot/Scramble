const Scramble = require('../models/scramble')
const User = require('../models/user')
const functionCheck = require('../config/functions')

module.exports = {
    index,
    newView,
    create,
    showScramble,
    edit,
    update
}

async function index(req, res) {
    try {
        const scrambles = await Scramble.find({participants:res.locals.user._id})
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
        let newScramble = {}
        newScramble.title = req.body.title
        newScramble.description = req.body.description
        newScramble.createdBy = res.locals.user._id
        newScramble.prompt = req.body.prompt
        newScramble.answers = {
            number: 1,
            text: req.body.answer,
            postedBy: res.locals.user._id,  
        }
        newScramble.participants = res.locals.user._id

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
        const scramble = await Scramble.findById(req.params.id).populate('answers.postedBy').populate('participants')
        let userIsCreator = false

        if (scramble.createdBy.toString() === res.locals.user._id.toString()) {
            userIsCreator = true
        } 
        // sanitize google info before returning to public scramble
        scramble.answers.forEach(function(answer){
            answer.postedBy.googleId = ""
            answer.postedBy.email = ""
            answer.postedBy.createdAt = null
            answer.postedBy.updatedAt = null
        })
        scramble.participants.forEach(function(participant) {
            participant.googleId = ""
            participant.email = ""
            participant.createdAt = null
            participant.updatedAt = null
        })
        console.log(scramble)

        res.render('scrambles/view', {
            title: "Scramble",
            homeTab: "active",
            newTab: "",
            friendsTab: "",
            avatar: avatar,
            name: userFirstName,
            isCreator: userIsCreator,
            locked: scramble.settings.locked,
            scramble: scramble,
            id:res.locals.user._id.toString()
        });  
    } catch (err) {
        console.log(err)
    }
}

async function update(req,res) {
    const scrambleID = req.params.id
    const userID = req.params.user
    const newAnswer = req.body.answer


    try {
        await Scramble.findOneAndUpdate({"answers.postedBy": userID},{$set: {"answers.text": newAnswer}})

        res.redirect('/scrambles')

    } catch (err) {
        console.log(err)
    }

}

async function edit(req, res) {
    let description, sTitle, userFirstName, avatar, userAnswer = ""
    const idx = req.params.id
    const userFullName = res.locals.user.name
    avatar = res.locals.user.avatar
    userFirstName = functionCheck.prepareUserName(userFullName)

    try {
        const scramble = await Scramble.findById(idx)
        description = scramble.description
        sTitle = scramble.title

        res.render('scrambles/participant-edit', {
            title: "Edit",
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