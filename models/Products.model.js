module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    item_code: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    desc: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.STRING,
    },
    rating_count: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    discount: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    stock: {
      type: Sequelize.STRING,
    },
  });
  return Product;
};
