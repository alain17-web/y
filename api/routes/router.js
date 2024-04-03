const router = require('express').Router()
const userRouter = require('./user.router')
const postRouter = require('./post.router')
const commentRouter = require('./comment.router')
const followRouter = require('./follow.router')

router.use('/users',userRouter)

router.use('/posts',postRouter)

router.use('/comments',commentRouter)

router.use('/follows',followRouter)


module.exports = router