const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Customer = require('../models/Customers');

router.get('/', (req, res) =>
    Customer.findAll()
        .then(customer => {
            console.log(customer);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));
//Add customer
router.post('/'), (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    let errors = [];

    //validate 
    if (!firstName) {
        errors.push({ text: 'please add firstName' });
    }
    if (!lastName) {
        errors.push({ text: 'please add lastName' });
    }
    if (!email) {
        errors.push({ text: 'please add email' });
    }
    if (!password) {
        errors.push({ text: 'please add password' });
    }
    //check errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            firstName,
            lastName,
            email,
            password
        })
    } else {
        Customer.create({
            firstName,
            lastName,
            email,
            password
        })
            .then(customer => res.redirect('/customers'))
            .catch(err => console.log(err));
    }

}
module.exports = router;