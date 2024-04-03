const yup = require('yup');

const authValidator = yup.object({
    username: yup.string().required(),
    pwd: yup.string().required()
});

module.exports = authValidator;