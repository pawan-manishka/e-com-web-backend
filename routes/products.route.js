module.exports = function(app) {
    var cors = require('cors')
    app.use(cors())

    const products = require('../controller/product.controller');
 
    // Create a new product
    app.post('/api/products', products.create);
 
    // Retrieve all product
    app.get('/api/products', products.findAll);
 
    // Retrieve a single product by Id
    app.get('/api/products/:productId', products.findById);
 
    // Update a product with Id
    app.put('/api/products/:productId', products.update);
 
    // Delete a product with Id
    app.delete('/api/products/:productId', products.delete);
}