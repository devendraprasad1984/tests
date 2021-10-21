const Users = require('../models/user')

module.exports.signup = function (req, res, next) {
    // console.log(req.body)
    const email = req.body.email
    const password = req.body.password
    if (!email || !password) {
        return res.status(422).send({error: 'email or password is missing!'})
    }

    Users.findOne({email: email}, (err, data) => {
        if (err) {
            return next(err)
        }
        if (data) {
            return res.status(422).send({error: 'email is in use'})
        }
        const user = new Users({
            email: email, password: password
        })
        user.save((err) => {
            if (err) return next(err)
            res.json({success: true, user: user})
        })
    })
}