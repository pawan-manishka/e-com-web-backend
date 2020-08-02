module.exports = function(app) {
    var cors = require('cors')
    app.use(cors())

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