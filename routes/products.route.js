module.exports = function (app, multer, path) {
  var cors = require("cors");
  app.use(cors());

  const products = require("../controller/Product.controller");

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

//will be using this for uplading
const upload = multer({ storage: storage });

app.post('/testUpload', upload.single('file'), function(req,res) {
  console.log('storage location is ', req.hostname +'/' + req.file.path);
  return res.send(req.file);
})
  // Create a new product
  app.post("/api/products", products.create);
  
  // Retrieve all product
  app.get("/api/products", products.findAll);

  // Retrieve a single product by Id
  app.get("/api/products/:productId", products.findByPk);

  // Update a product with Id
  app.put("/api/products/:productId", products.update);

  // Delete a product with Id
  app.delete("/api/products/:productId", products.delete);
};
