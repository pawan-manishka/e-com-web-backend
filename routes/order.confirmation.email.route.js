
module.exports = (app) => {
    const mail = require("../controller/order.registration.controller");
    var router = require("express").Router();
    const cors = require("cors");
  
    app.use(cors());
  
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      next();
    });
  
    router.post("/", mail.mail);
  
    app.use("/api/student_order_mail", router);
    
  };
  