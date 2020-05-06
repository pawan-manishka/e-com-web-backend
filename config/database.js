const Sequelize = require('sequelize');

const sequelize = new Sequelize('admin_ecom', 'admin_user123', 'Passport@1', {
  host: '198.211.10.114',
  dialect: 'mysql',  

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../models/Customers.model')(sequelize, Sequelize);
db.products = require('../models/Products.model')(sequelize, Sequelize);
db.Order = require('../models/Order.model')(sequelize, Sequelize);

//jwt
db.user = require('../models/user.model')(sequelize, Sequelize);
db.role = require('../models/role.model')(sequelize, Sequelize);

db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});


module.exports = db;