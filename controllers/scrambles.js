const Scramble = require('../models/scramble')
const User = require('../controllers/users')


module.exports = {
    index,
    create,
    showScramble
}

async function index(req, res) {
    try {
        const scrambles = await Scramble.find({})
        console.log(scrambles)
        res.render('scrambles/index', {
            title: "Scramble",
            homeTab: "active",
            newTab: "",
            friendsTab: "",
            scrambles: scrambles
        })
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
        const scramble = await Scramble.findById(req.params.id)
        res.render('scrambles/view', {
            title: "Scramble",
            homeTab: "active",
            newTab: "",
            friendsTab: "",
            scramble: scramble
        });  
    } catch (err) {
        console.log(err)
    }
}