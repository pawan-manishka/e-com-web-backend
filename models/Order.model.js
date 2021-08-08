module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    customer_id: {
      type: Sequelize.STRING,
    },
    customer_name: {
      type: Sequelize.STRING,
    },
    order_list: {
      type: Sequelize.STRING,
    },
    order_deliverytype: {
      type: Sequelize.STRING,
    },
    order_delivery_address: {
      type: Sequelize.STRING,
    },
    cityTown: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    totalPrice: {
      type: Sequelize.STRING,
    },
    landLine: {
      type: Sequelize.STRING,
    },
    payment_status: {
      type: Sequelize.STRING,
    },
  });
  return Order;
};
