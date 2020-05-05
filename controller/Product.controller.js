const db = require('../config/database');
const Product = db.products;

// Post a Product
exports.create = (req, res) => {
	// Save to MySQL database
	Product.create({
		item_code: req.body.item_code,
		title: req.body.title,
		status: req.body.status,
		desc: req.body.desc,
		quantity: req.body.quantity,
		rating: req.body.rating,
		rating_count: req.body.rating_count,
		price: req.body.price,
		discount: req.body.discount,
		image: req.body.image,

	}).then(Product => {
		// Send created Product to client
		res.send(Product);
	});
};

// FETCH all Product
exports.findAll = (req, res) => {
	Product.findAll().then(Product => {
		// Send all Product to Client
		res.send(Product);
	});
};

// Find a Product by Id
exports.findById = (req, res) => {
	Product.findById(req.params.Product).then(Product => {
		res.send(Product);
	})
};

// Update a Product
exports.update = (req, res) => {
	const id = req.params.productId;
	Product.update({
		item_code: req.body.item_code,
		title: req.body.title,
		status: req.body.status,
		desc: req.body.desc,
		quantity: req.body.quantity,
		rating: req.body.rating,
		rating_count: req.body.rating_count,
		price: req.body.price,
		discount: req.body.discount,
		image: req.body.image,
	},
		{ where: { id: req.params.productId} }
	).then(() => {
		res.status(200).send("updated successfully a Product with id = " + id);
	});
};

// Delete a Product by Id
exports.delete = (req, res) => {
	const id = req.params.productId;
	Product.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a Product with id = ' + id);
	});
};