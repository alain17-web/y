const postService = require('../services/post.service')
const userService = require('../services/user.service')
const postValidator = require("../validators/postValidator");

const postController = {
    addPost: async (req, res) => {
        try {
            const validationResult = await postValidator.validate(req.body)
            if (validationResult.error) {
                res.status(400).json({error: validationResult.error});
                return;
            }

            const {userId} = req.params;

            const {postContent} = req.body;

            const newPost = await postService.addPost(userId, postContent);

            if (newPost) {
                res.status(201).json({message: 'New post created'});
            } else {
                res.status(500).json({message: 'Failed to add new post'});
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    deletePost: async (req, res) => {
        try {
            const {postId} = req.params;

            const deletedPost = await postService.deletePost(postId);

            if (deletedPost) {
                res.status(201).json({message: 'Post deleted'})
            } else {
                res.status(404).json({message: 'No post found'})
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getAllPosts: async (req, res) => {
        try {
            const posts = await postService.getAllPosts();
            res.status(200).json(posts);
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getPostByPostId: async (req, res) => {
        try {
            const postId = req.params.postId;
            const author = await user


            const post = await postService.getPostByPostId(postId);

            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).send('Post not found');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getAllPostsByAuthorId: async (req, res) => {
        try {
            const authorId = req.params.authorId;


            const author = await userService.getUserById(authorId);
            if (!author) {
                return res.status(404).send('Author not found');
            }


            const posts = await postService.getAllPostsByAuthorId(authorId);

            if (posts) {
                res.status(200).json(posts);
            } else {
                res.status(404).send('No post found ');
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },


}

module.exports = postController