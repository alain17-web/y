const sql = require('mssql');
const sqlConfig = require('../database');

const postService = {
    addPost: async (userId,postContent) => {
        try{
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('userId',sql.Int,userId)
                .input('postContent',sql.Text,postContent)
                .query('INSERT INTO posts (postAuthorId, postContent) VALUES (@userId, @postContent)')

            return result.rowsAffected[0] > 0

        } catch(err){
            console.error(err);
            throw err;
        }
    },

    deletePost: async (postId) => {
        try{
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('postId', sql.Int, postId)
                .query('DELETE FROM posts WHERE postId = @postId');

            return result.rowsAffected[0] > 0;

        } catch (err){
            console.error(err);
            throw err;
        }
    },

    getAllPosts: async () => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request.query('SELECT * FROM posts');

            return result.recordset;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getPostByPostId: async (postId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('postId', sql.Int, postId)
                .query('SELECT * FROM posts WHERE postId = @postId');

            if (result.recordset.length > 0) {
                return result.recordset[0];
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getAllPostsByAuthorId: async (authorId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('authorId', sql.Int, authorId)
                .query('SELECT * FROM posts WHERE postAuthorId = @authorId');

            return result.recordset;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },




}

module.exports = postService