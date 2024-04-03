const yup = require('yup');

const postValidator = yup.object({
    postContent: yup.string().required()

});

module.exports = postValidator;