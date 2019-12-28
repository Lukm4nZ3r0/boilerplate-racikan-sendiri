const PostController = require('../controllers/PostController')
const jwtConfig = require('../middlewares/jwtConfig')

module.exports = (router) =>{
    router.route('/posts')
        .get(jwtConfig.verify, PostController.getAllPost)
}