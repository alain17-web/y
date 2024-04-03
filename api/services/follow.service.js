const sql = require('mssql');
const sqlConfig = require('../database');

const followService = {
    followUserByUserId: async (followerId, followedUserId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            // Vérifier si le follower suit déjà l'utilisateur suivi
            const checkFollowQuery = `
                SELECT COUNT(*) AS count 
                FROM follows 
                WHERE followerId = @followerId AND followedUserId = @followedUserId
            `;
            const checkFollowResult = await request
                .input('followerId', sql.Int, followerId)
                .input('followedUserId', sql.Int, followedUserId)
                .query(checkFollowQuery);

            if (checkFollowResult.recordset[0].count > 0) {

                return false;
            }


            const addFollowQuery = `
                INSERT INTO follows (followerId, followedUserId)
                VALUES (@followerId, @followedUserId)
            `;
            await request
                .input('followerIdToAdd', sql.Int, followerId)
                .input('followedUserIdToAdd', sql.Int, followedUserId)
                .query(addFollowQuery);

            return true;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getAllFollowingById: async (userId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const query = `
                SELECT followedUserId
                FROM follows
                WHERE followerId = @userId
            `;
            const result = await request
                .input('userId', sql.Int, userId)
                .query(query);

            return result.recordset.map(row => row.followedUserId);
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getAllFollowedById: async (userId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const query = `
                SELECT followerId
                FROM follows
                WHERE followedUserId = @userId
            `;
            const result = await request
                .input('userId', sql.Int, userId)
                .query(query);

            return result.recordset.map(row => row.followerId);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};

module.exports = followService;
