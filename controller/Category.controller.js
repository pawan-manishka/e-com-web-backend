const db = require("../config/database");
const Category = db.Category;

// Post a Category
exports.create = (req, res) => {
  // Save to MySQL database
  Category.create({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
  }).then((Category) => {
    // Send created Category to client
    res.send(Category);
  });
};

// FETCH all Category
exports.findAll = (req, res) => {
  Category.findAll().then((Category) => {
    // Send all Category to Client
    res.send(Category);
  });
};

// Find a Category by Id
exports.findByPk = (req, res) => {
  Category.findByPk(req.params.CategoryId).then((Category) => {
    res.send(Category);
  });
};

// Update a Category
exports.update = (req, res) => {
  const id = req.params.CategoryId;
  Category.update(
    {
      id: req.body.id,
      name: req.body.name,
      image: req.body.image,
    },
    { where: { id: req.params.CategoryId } }
  ).then(() => {
    res.status(200).send("updated successfully a Category with id = " + id);
  });
};

// Delete a Category by Id
exports.delete = (req, res) => {
  const id = req.params.CategoryId;
  Category.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a Category with id = " + id);
  });
};
