const Sequelize = require('sequelize');
const db = require('../config/database');
const Customer = db.define('customer',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    firstName:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
})

module.exports = Customer;