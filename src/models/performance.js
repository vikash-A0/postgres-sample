const Sequelize = require('sequelize');
const db = require('../database/db');


const Performance = db.define('performance',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    computer_name:{
        type: Sequelize.STRING,
        
        
    },
    cpu_percentage:{
        type: Sequelize.INTEGER,
        isInt: true,
        allownull: false,
        
    },
    memory_percentage:{
        type: Sequelize.INTEGER,
        isInt: true,
        allowNull: false,
        
    },
    storage_percentage:{
        type: Sequelize.INTEGER,
        allownull: false,
        
    }
});

module.exports = Performance;