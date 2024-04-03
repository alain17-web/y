const yup = require('yup');

const registerValidator = yup.object({
    lastName: yup.string().max(50).required(),
    firstName: yup.string().max(50).required(),
    username: yup.string().max(50).required(),
    pwd: yup.string().max(550).required(),

});

module.exports = registerValidator;