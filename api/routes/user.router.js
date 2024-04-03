const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')
const jwtVerification = require('../middleware/jwtVerification')

userRouter.route('/register')
    .post(userController.register)

userRouter.route('/login')
    .post(userController.login)

userRouter.route('/logout')
    .post(jwtVerification,userController.logout)

userRouter.route('/:userId')
    .delete(jwtVerification,userController.deleteUser)
    .get(jwtVerification,userController.getUserById)

userRouter.route('/:userId/privateProfile')
    .get(jwtVerification,userController.getPrivateProfile)
    .put(jwtVerification,userController.updateProfile)


module.exports = userRouter