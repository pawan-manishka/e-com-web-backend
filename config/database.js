const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('admin_pos', 'admin_user', '1qaz2wsx@1', {
  host: '198.211.10.114',
  dialect: 'mysql',  

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
