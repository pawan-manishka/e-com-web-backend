module.exports = (sequelize, Sequelize) => {
  const category = sequelize.define("category", {
    id: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
  });
  return category;
};
