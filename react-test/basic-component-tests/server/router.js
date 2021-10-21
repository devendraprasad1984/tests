const controllers = require('./controllers')

module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.end('hello home page')
    })
    app.post('/signup', controllers.authController.signup)
}