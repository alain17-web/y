const postRouter = require('express').Router()
const postController = require('../controllers/post.controller')
const jwtVerification = require('../middleware/jwtVerification')

postRouter.route('/addPost/:userId')
    .post(jwtVerification,postController.addPost)

postRouter.route('/delete/:postId')
    .delete(jwtVerification,postController.deletePost)

postRouter.route('/')
    .get(jwtVerification,postController.getAllPosts)

postRouter.route('/:postId')
    .get(jwtVerification,postController.getPostByPostId)

postRouter.route('/author/:authorId')
    .get(jwtVerification,postController.getAllPostsByAuthorId)


module.exports = postRouter