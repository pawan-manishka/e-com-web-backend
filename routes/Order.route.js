module.exports = function (app) {
  var cors = require("cors");
  app.use(cors());

  const Order = require("../controller/order.controller");
 
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

  // Create a new product
  app.post("/api/addOrder", Order.create);

  // Retrieve all product
  app.get("/api/getOrders", Order.findAll);

  // Retrieve a single product by Id
  app.get("/api/Order/:OrderId", Order.findByPk);

  // Update a product with Id
  app.put("/api/Order/:OrderId", Order.update);

  // Delete a product with Id
  app.delete("/api/Order/:OrderId", Order.delete);
};
