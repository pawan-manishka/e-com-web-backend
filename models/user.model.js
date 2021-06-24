module.exports = (sequelize, Sequelize) => {
  //user model
  const User = sequelize.define("users", {
    fullName: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },

    mobile: {
      type: Sequelize.STRING,
    },
    landLine: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
