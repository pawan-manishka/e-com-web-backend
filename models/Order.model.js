module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    Order_no: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cutomer_id: {
      type: Sequelize.STRING,
    },
    cutomer_name: {
      type: Sequelize.STRING,
    },
    order_list: {
      type: Sequelize.STRING,
      // get: function () {
      //   return JSON.parse(this.getDataValue("order_list"));
      // },
      // set: function (value) {
      //   return this.setDataValue("order_list", JSON.stringify(value));
      // },
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
    landLine: {
      type: Sequelize.STRING,
    },

    Payment_Status: {
      type: Sequelize.STRING,
    },
  });
  return Order;
};
