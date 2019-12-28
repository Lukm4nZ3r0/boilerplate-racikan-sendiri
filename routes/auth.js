const AuthController = require('../controllers/AuthController')

module.exports = (router) =>{
    router.route('/login')
        .post(AuthController.login)

    router.route('/register')
        .post(AuthController.register)
}