const Sequelize = require('sequelize');
const db = require('../config/database');
const Products = db.define('products',{
    item_code:{
        type:Sequelize.STRING
    },
    title:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.STRING
    },
    desc:{
        type:Sequelize.STRING
    },
    quantity:{
        type:Sequelize.STRING
    },
    rating:{
        type:Sequelize.STRING
    },
    rating_count:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.STRING
    },
    discount:{
        type:Sequelize.STRING
    },
    image:{
        type:Sequelize.STRING
    },
})

module.exports = Products;