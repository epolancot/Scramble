const Scramble = require('../models/scramble')

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

}