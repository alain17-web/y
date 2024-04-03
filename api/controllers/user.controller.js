const userService = require('../services/user.service')
const registerValidator = require('../validators/registerValidator')
const authValidator = require('../validators/authValidator');
const updateProfileValidator = require('../validators/updateProfileValidator')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

const userController = {
    register: async (req, res) => {
        try {
            const validationResult = await registerValidator.validate(req.body)
            if (validationResult.error) {
                res.status(400).json({error: validationResult.error});
                return;
            }

            const {lastName, firstName, username, pwd} = validationResult;
            const hashedPwd = bcrypt.hashSync(pwd, 10)

            const registrationResult = await userService.register({lastName, firstName, username, hashedPwd});

            if (registrationResult.rowsAffected[0] > 0) {
                res.status(200).json({message: 'Successfull registration'})
            }
        } catch (err) {
            console.error(err)
            res.sendStatus(500)
        }
    },

    login: async (req, res) => {
        try {
            const validationResult = await authValidator.validate(req.body);
            if (validationResult.error) {
                res.status(400).json({error: validationResult.error})
            }

            const {username, pwd} = validationResult;
            const user = await userService.login(username, pwd);

            if (!user) {
                res.status(401).json({message: 'incorrect password'})
            } else {
                if (user.jwt !== null) {
                    return res.status(200).json({ message: 'logged in succesfully'})

                }

                const payload = {
                    userId: user.userId,
                    username: user.username
                };

                const options = {
                    expiresIn: '2d'
                };
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, options);

                console.log(token)

                const userJwt = userService.updateJwt(user.userId,token)



                if (userJwt) {
                    res.setHeader('Authorization', `Bearer ${token}`).json({
                        token: token,
                        message:"Connected successfully"
                    })


                }

            }
        } catch (err) {
            console.error(err)
            res.sendStatus(500)
        }
    },

    logout: async (req, res) => {
        try {
            const {userId} = req.params;

            const loggedOut = await userService.logout(userId);

            if (loggedOut) {
                res.status(200).json({ message: 'Logged out successfully' });
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },



    deleteUser: async (req,res) => {
        try{
            const {userId} = req.params
            const deletedUser = await userService.deleteUser(userId)

            if(deletedUser){
                res.status(200).json({message:"The user has been deleted"})
            } else {
                res.status(404).json({message:'User not found'})
            }
        } catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    },

    getPrivateProfile: async (req,res) => {
        try{
            const {userId} = req.params
            const userPrivateProfile = await userService.getPrivateProfile(userId)

            if(userPrivateProfile){
                res.status(200).json(userPrivateProfile)
            } else {
                res.status(404).send('User profile not found')
            }
        } catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    },

    updateProfile: async (req, res) => {
        try {
            const {userId} = req.params;
            const newData = req.body;

            const validationResult = await updateProfileValidator.validate(req.body)
            if (validationResult.error) {
                res.status(400).json({error: validationResult.error});
                return;
            }

            const updated = await userService.updateProfile(userId, newData);

            if (updated) {
                res.status(200).json({message:'profile updated'});
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getUserById: async (req, res) => {
        try {
            const {userId} = req.params;
            const user = await userService.getUserById(userId);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },



    /* getProfile: async (req, res) => {
         try {
             const {userId} = req.payload
             const user = await userService.getProfile(username);

             if (!user) {
                 res.status(404).json({message: 'the user has not been found'})
             } else {
                 const profile = {
                     lastName: user.lastName,
                     firstName: user.firstName,
                     username: user.username
                 }

                 res.status(200).json({ profile })
             }
         } catch (err) {
             console.error(err, 'bug au controller')
             res.sendStatus(500)
         }
     }*/
}

module.exports = userController



