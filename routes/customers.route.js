module.exports = function (app) {
  var cors = require("cors");
  app.use(cors());
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
