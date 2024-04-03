const commentService = require('../services/comment.service')
const commentValidator = require('../validators/commentValidator')


const commentController = {
    addComment: async (req, res) => {
        try {
            const validationResult = await commentValidator.validate(req.body)
            if (validationResult.error) {
                res.status(400).json({error: validationResult.error});
                return;
            }

            const { postId, commentAuthorId, commentContent } = req.body;
            const newComment = await commentService.addComment(postId, commentAuthorId, commentContent);

            if (newComment) {
                res.status(201).json({ message: 'Comment added successfully' });
            } else {
                res.status(500).json({ error: 'Failed to add comment' });
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getCommentById: async (req, res) => {
        try {
            const { commentId } = req.params;
            const comment = await commentService.getCommentById(commentId);

            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).send('Comment not found');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    deleteComment: async (req, res) => {
        try {
            const { commentId } = req.params;
            const deletedComment = await commentService.deleteComment(commentId);

            if (deletedComment) {
                res.status(201).json({message:'Comment deleted'});
            } else {
                res.status(404).send('Comment not found');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    }
}

module.exports= commentController