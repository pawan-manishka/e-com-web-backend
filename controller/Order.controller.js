const db = require("../config/database");
const Order = db.Order;

// Post a Order
exports.create = (req, res) => {
  // Save to MySQL database
  Order.create({
    Order_no: req.body.Order_no,
    cutomer_id: req.body.cutomer_id,
    order_list: req.body.order_list,
    order_deliverytype: req.body.order_deliverytype,
    order_delivery_address: req.body.order_delivery_address,
    Payment_Status: req.body.Payment_Status,
  }).then((Order) => {
    // Send created Order to client
    res.send(Order);
  });
};

// FETCH all Order
exports.findAll = (req, res) => {
  Order.findAll().then((Order) => {
    const test = Order.filter((order) =>  {
      const { order_list } = order
      console.log("teeeeeeeeeee")
      console.log(order_list)
     order.order_list = JSON.parse(order_list)
     return order
     })
    // console.log(Order)
    // Send all Order to Client
    res.send(test);
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
