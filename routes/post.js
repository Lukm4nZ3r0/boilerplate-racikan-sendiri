const PostController = require('../controllers/PostController')
const jwtConfig = require('../middlewares/jwtConfig')

module.exports = (router) =>{
    router.route('/posts')
        .get(jwtConfig.verify, PostController.getAllPost)
        .post(jwtConfig.verify, PostController.createNewPost)

    router.route('/posts/user/:id')
        .get(jwtConfig.verify, PostController.getPostByUserID)
}