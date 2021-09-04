var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const email = req.body.email;
  const customer_name = req.body.customer_name
  const items = req.body.order_list;

  var arrayItems = "";
  var n;
  for (n in items) {
    arrayItems += "<li>" + items[n].productName + "</li>";
  }

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465,
    auth: {
      user: "ravindu1997@gmail.com",
      pass: "Passport@1",
    },
  });

  var mailOptions = {
    from: "ravinduperera",
    to: email,
    subject: "Lanka Fresh Order Confirmation !",
    // html:
    // "<b>Client Email Template- Received this once the Booking done</b><div>The Following booking is confirmed:</div>
    // <div>Preferred Location: {{location}}</div><div>Exam Type {{exam_type}}</div>
    // <div>Event Name: {{event_name}}</div><div>Event Dates: {{event_date}}</div><div>Title:{{title}}</div><div>First name:{firstName}</div><div>Last Name:{{last name}}</div><div>Phone:</div>",
    html: `<!doctype html>
      <html ⚡4email>
        <head>
          <meta charset="utf-8">
          <style amp4email-boilerplate>body{visibility:hidden}</style>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
        </head>
        <body>
        <b>Hello ${customer_name}</b></br>
        <p>Your order has been successfully placed. Please find the details of your order below.</p></br></br>
        
        <b>ITEMS Orders</b></br>
        <ul>${arrayItems}</ul>
   
        <b>Thank you for shopping with Lanka Fresh</b>
        
        </body>
      </html>`,
  };

  transporter
    .sendMail(mailOptions)

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while send mail",
      });
    });
};
