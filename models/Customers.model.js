module.exports = (sequelize,Sequelize)=>{
const Customer = sequelize.define('customer',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    productName:{
        type:Sequelize.STRING
    },
    productQTY:{
        type:Sequelize.STRING
    },
    totalPrice:{
        type:Sequelize.STRING
    },
    
})
return Customer;
}