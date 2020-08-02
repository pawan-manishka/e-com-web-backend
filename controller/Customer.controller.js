const db = require("../config/database");
const Customer = db.customers;
const User = db.user;

// Post a Customer
exports.create = (req, res) => {
  // Save to MySQL database
  Customer.create({
    productName: req.body.productName,
    productQTY: req.body.productQTY,
    totalPrice: req.body.totalPrice,
  }).then((customer) => {
    // Send created customer to client
    res.send(customer);
  });
};

// Find a Customer by Id
exports.findByPk = (req, res) => {
  User.findByPk(req.params.userId).then((user) => {
    res.send(user);
  });
};

// Update a Customer
exports.update = (req, res) => {
  const id = req.params.customerId;
  Customer.update(
    {
      firstName: req.body.firstname,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    },
    { where: { id: req.params.customerId } }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a customer with id = " + id);
  });
};
exports.findAll = (req, res) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => ({
      message: "an error occurred!",
      error,
    }));
};
