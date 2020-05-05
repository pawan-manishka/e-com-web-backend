module.exports = (sequelize,Sequelize)=>{
const Customer = sequelize.define('customer',{
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
return Customer;
}