const followService = require('../services/follow.service');

const followController = {
    followUserByUserId: async (req, res) => {
        try {
            const followerId = req.params.followerId
            const followedUserId  = req.params.followedUserId;

            console.log(followerId, followedUserId)

            const isFollower = await followService.followUserByUserId(followerId, followedUserId);

            if (isFollower) {
                res.status(201).json({ message: 'User followed successfully' });
            } else {
                res.status(400).json({ error: 'User already followed or operation failed' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Unexpected error' });
        }
    },

    getAllFollowingById: async (req, res) => {
        try {
            const {userId} = req.params
            const followingUsers = await followService.getAllFollowingById(userId);
            res.status(200).json({ followingUsers });
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getAllFollowedById: async (req, res) => {
        try {
            const {userId} = req.params
            const followedIds = await followService.getAllFollowedById(userId);
            res.status(200).json({ followedIds });
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    }
};

module.exports = followController;
