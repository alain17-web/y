const yup = require('yup');

const commentValidator = yup.object({
    commentContent: yup.string().required()

});

module.exports = commentValidator;