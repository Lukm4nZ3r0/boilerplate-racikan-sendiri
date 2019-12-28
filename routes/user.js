const UserController = require('../controllers/UserController')

module.exports = (router) =>{
    router.route('/users')
        .get(UserController.getAllUsers)

    router.route('/user/:id')
        .get(UserController.getUserByID)
}