const db = require('../config/database');
const Customer = db.customers;

// Post a Customer
exports.create = (req, res) => {
	// Save to MySQL database
	Customer.create({
		firstName: req.body.firstname,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	}).then(customer => {
		// Send created customer to client
		res.send(customer);
	});
};

// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		// Send all customers to Client
		res.send(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {
	Customer.findById(req.params.customerId).then(customer => {
		res.send(customer);
	})
};

// Update a Customer
exports.update = (req, res) => {
	const id = req.params.customerId;
	Customer.update({
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
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a customer with id = ' + id);
	});
};