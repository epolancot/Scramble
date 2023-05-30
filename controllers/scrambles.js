const Scramble = require('../models/scramble')
const User = require('../controllers/users')


module.exports = {
    create
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