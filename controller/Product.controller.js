const db = require("../config/database");
const Product = db.products;
const Op = db.Sequelize.Op;
// Post a Product
exports.create = (req, res) => {
  // Save to MySQL database
  Product.create({
    title: req.body.title,
    item_code: req.body.item_code,
    category: req.body.category,
    desc: req.body.desc,
    rating: req.body.rating,
    rating_count: req.body.rating_count,
    price: req.body.price,
    discount: req.body.discount,
    image: req.body.image,
    category: req.body.category,
    stock: req.body.stock,
  }).then((Product) => {
    // Send created Product to client
    res.send(Product);
  });
};

// FETCH all Product
// exports.findAll = (req, res) => {
//   Product.findAll().then((Product) => {
//     // Send all Product to Client
//     res.send(Product);
//   });
// };

// Find a Product by Id
exports.findByPk = (req, res) => {
  Product.findByPk(req.params.productId).then((Product) => {
    res.send(Product);
  });
};
// exports.findOne = (req, res) => {
//   where: {
//     category: "helthCare";
//   }
// };

exports.findAll = (req, res) => {
  const category = req.query.category;
  var condition = category
    ? { category: { [Op.like]: `%${category}%` } }
    : null;

  Product.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Update a Product
exports.update = (req, res) => {
  const id = req.params.productId;
  Product.update(
    {
      title: req.body.title,
      item_code: req.body.item_code,
      category: req.body.category,
      desc: req.body.desc,
      rating: req.body.rating,
      rating_count: req.body.rating_count,
      price: req.body.price,
      discount: req.body.discount,
      image: req.body.image,
      category: req.body.category,
      stock: req.body.stock,
    },
    { where: { id: req.params.productId } }
  ).then(() => {
    res.status(200).send("updated successfully a Product with id = " + id);
  });
};

// Delete a Product by Id
exports.delete = (req, res) => {
  const id = req.params.productId;
  Product.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a Product with id = " + id);
  });
};
