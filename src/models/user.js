const Sequelize = require('sequelize');

const db = require('../database/db');

const Joi = require('joi');


const User = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        


    },
    password: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
        
    },
    
});

// module.exports = {
//     User: User,
//     loginSchema: loginSchema
// };


module.exports = User;

