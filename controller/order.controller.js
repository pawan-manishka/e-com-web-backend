const db = require("../config/database");
const Order = db.Order;

// Post a Order
exports.create = (req, res) => {
  // Save to MySQL database
  Order.create({
    order_no: req.body.order_no,
    customer_id: req.body.customer_id,
    customer_name: req.body.customer_name,
    order_list: req.body.order_list,
    order_deliverytype: req.body.order_deliverytype,
    order_delivery_address: req.body.order_delivery_address,
    payment_status: req.body.payment_status,
    mobile: req.body.mobile,
    landLine: req.body.landLine,
    cityTown: req.body.cityTown,
  }).then((Order) => {
    // Send created Order to client
    res.send(Order);
  });
};

// FETCH all Order
exports.findAll = (req, res) => {
  Order.findAll().then((Order) => {
    // Send all Order to Client
    res.send(Order);
  });
};

// Find a Order by Id
exports.findByPk = (req, res) => {
  Order.findByPk(req.params.OrderId).then((Order) => {
    res.send(Order);
  });
};

// Update a Order
exports.update = (req, res) => {
  const id = req.params.OrderId;
  Order.update(
    {
      Order_no: req.body.Order_no,
      cutomer_id: req.body.cutomer_id,
      order_list: req.body.order_list,
      order_deliverytype: req.body.order_deliverytype,
      order_delivery_address: req.body.order_delivery_address,
      Payment_Status: req.body.Payment_Status,
    },
    { where: { id: req.params.OrderId } }
  ).then(() => {
    res.status(200).send("updated successfully a Order with id = " + id);
  });
};

// Delete a Order by Id
exports.delete = (req, res) => {
  const id = req.params.OrderId;
  Order.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a Order with id = " + id);
  });
};
