module.exports = function (app) {
  var cors = require("cors");
  app.use(cors());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
  });
  const customers = require("../controller/Customer.controller");

  // Create a new Customer
  app.post("/api/customers", customers.create);

  // Retrieve all Customer
  app.get("/api/customers", customers.findAll);

  // Retrieve a single Customer by Id
  app.get("/api/customers/:userId", customers.findByPk);
  app.get("/api/customers/findAll", customers.findAll);

  // Update a Customer with Id
  app.put("/api/customers/:customerId", customers.update);

  // Delete a Customer with Id
  app.delete("/api/customers/:customerId", customers.delete);
};
