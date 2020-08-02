var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

bodyParser = {
  json: { limit: "50mb", extended: true },
  urlencoded: { limit: "50mb", extended: true },
};
const db = require("./config/database");

//jwt Role
const Role = db.role;
// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log(`Drop and Resync with { force: true }`);
});

require("./routes/customers.route")(app);
require("./routes/products.route")(app);
require("./routes/Order.route")(app);

//jwt
require("./routes/jwt.routes")(app);

// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://localhost", host, port);
});
