module.exports = function(app) {
    var cors = require('cors')
    app.use(cors())

    const Order = require('../controller/order.controller');
 
    // Create a new product
    app.post('/api/addOrder', Order.create);
 
    // Retrieve all product
    app.get('/api/getOrders', Order.findAll);
 
    // Retrieve a single product by Id
    app.get('/api/Order/:OrderId', Order.findByPk);
 
    // Update a product with Id
    app.put('/api/Order/:OrderId', Order.update);
 
    // Delete a product with Id
    app.delete('/api/Order/:OrderId', Order.delete);
}