const controllers = require('./controllers')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', {session: false}) //this is middleware interceptor for auth for each incoming request
const requireSignin = passport.authenticate('local', {session: false})

//in python, its done via decorator pattern and attachment over each api call
module.exports = function (app) {
    app.get('/', requireAuth, function (req, res, next) {
        res.end({msg: 'hello home page', auth: true})
    })
    app.post('/signup', controllers.authController.signup)
    app.post('/signin', requireSignin, controllers.authController.signin)
}