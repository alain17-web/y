const followRouter = require('express').Router()
const followController = require('../controllers/follow.controller')
const jwtVerification = require('../middleware/jwtVerification')

followRouter.route('/follow/:followerId/:followedUserId')
    .post(jwtVerification,followController.followUserByUserId)

followRouter.route('/following/:userId')
    .get(jwtVerification,followController.getAllFollowingById);

followRouter.route('/followed/:userId')
    .get(jwtVerification,followController.getAllFollowedById);

module.exports = followRouter