const UserController = require('../controllers/UserController')

module.exports = (router) =>{
    router.route('/users')
        .get(UserController.getAllUsers)

    router.route('/users/:id')
        .get(UserController.getUserByID)
        .put(UserController.updateUserByID)
}