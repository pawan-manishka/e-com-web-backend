var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./config/database');

//cors
const enableCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
}

//jwt Role
const Role = db.role;
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log(`Drop and Resync with { force: true }`);
});

require('./routes/customers.route')(app);
require('./routes/products.route')(app);

//jwt
require('./routes/jwt.routes')(app);

 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://localhost", host, port)
})