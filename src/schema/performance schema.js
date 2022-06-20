const Joi = require('joi');
// const schema = require('./validation schema');
const {cpu_percentage,memory_percentage,storage_percentage} = require('../models/performance');

const schema = Joi.object({
   computer_name: Joi.string().min(2).max(10),
   cpu_percentage: Joi.number().greater(0).less(100),
   memory_percentage: Joi.number().greater(0).less(100),
   storage_percentage: Joi.number().greater(0).less(100),
});

module.exports = schema;