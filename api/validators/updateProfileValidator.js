const yup = require('yup');

const updateProfileValidator = yup.object({
    lastName: yup.string().max(50),
    firstName: yup.string().max(50),
    username: yup.string().max(50),
    pwd: yup.string().max(550),

});

module.exports = updateProfileValidator;