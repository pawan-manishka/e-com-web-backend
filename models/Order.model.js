module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('order', {
        Order_no: {
            type: Sequelize.STRING,
            allowNull:false,
        },
        cutomer_id: {
            type: Sequelize.STRING
        },
        order_list: {
            type: Sequelize.TEXT
        },
        order_deliverytype: {
            type: Sequelize.STRING
        },
        order_delivery_address: {
            type: Sequelize.STRING
        },
        Payment_Status: {
            type: Sequelize.STRING
        },
    })
    return Order;
}
