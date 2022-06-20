const Joi = require('joi');
const {username,password} = require('../models/user');


const loginSchema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(5).required().max(20),
});

module.exports = loginSchema;