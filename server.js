const express = require('express');
const bodyprser = require('body-parser');

//dtabase connaction
const db = require('./config/database');
//testDB
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const app = express();

app.get('/',(req,res)=>res.send('index'));
const PORT = process.env.PORT || 5000;
//customer routes
app.use('/customers', require('./routes/customers'));
app.use('/products', require('./routes/products'));

app.listen(PORT, console.log(`server start on port ${PORT}`));