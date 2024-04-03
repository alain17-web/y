const sql = require('mssql');
const sqlConfig = require('../database');


const commentService = {
    addComment: async (postId, commentAuthorId, commentContent) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('postId', sql.Int, postId)
                .input('commentAuthorId', sql.Int, commentAuthorId)
                .input('commentContent', sql.NVarChar, commentContent)
                .query('INSERT INTO comments (postId, commentAuthorId, commentContent) VALUES (@postId, @commentAuthorId, @commentContent)');

            return result.rowsAffected[0] > 0;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getCommentById: async (commentId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('commentId', sql.Int, commentId)
                .query('SELECT * FROM comments WHERE commentId = @commentId');

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

    deleteComment: async (commentId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('commentId', sql.Int, commentId)
                .query('DELETE FROM comments WHERE commentId = @commentId');

            return result.rowsAffected[0] > 0;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = commentService