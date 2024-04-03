const commentRouter = require('express').Router()
const commentController = require('../controllers/comment.controller')
const jwtVerification = require('../middleware/jwtVerification')

commentRouter.route('/addComment/:postId')
    .post(jwtVerification,commentController.addComment)

commentRouter.route('/:commentId')
    .get(jwtVerification,commentController.getCommentById)
    .delete(jwtVerification,commentController.deleteComment)

module.exports = commentRouter