const Sequelize = require("sequelize");

const sequelize = new Sequelize("admin_ecom", "admin_hw", "Passport@1", {
  // const sequelize = new Sequelize('ecom', 'root', 'Blackcobrafkr159$', {
  host: "173.82.114.220",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require("../models/Customers.model")(sequelize, Sequelize);
db.products = require("../models/Products.model")(sequelize, Sequelize);
db.Order = require("../models/Order.model")(sequelize, Sequelize);

//jwt
db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

module.exports = db;
