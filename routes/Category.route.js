module.exports = function(app) {
    var cors = require('cors')
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

    const Category = require('../controller/Category.controller');
 
    // Create a new product
    app.post('/api/addCategory', Category.create);
 
    // Retrieve all product
    app.get('/api/getCategorys', Category.findAll);
 
    // Retrieve a single product by Id
    app.get('/api/Category/:CategoryId', Category.findByPk);
 
    // Update a product with Id
    app.put('/api/Category/:CategoryId', Category.update);
 
    // Delete a product with Id
    app.delete('/api/Category/:CategoryId', Category.delete);
}