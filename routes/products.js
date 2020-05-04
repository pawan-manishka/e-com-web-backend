const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Products = require('../models/Products');

router.get('/', (req, res) =>
    Products.findAll()
        .then(customer => {
            console.log(customer);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));
//Add customer
router.post('/'), (req, res) => {
    let { item_code, title, status, desc, quantity, rating, rating_count, price, discount, image } = req.body;
    let errors = [];

    //validate 
    if (!item_code) {
        errors.push({ text: 'please add item_code' });
    }
    if (!title) {
        errors.push({ text: 'please add title' });
    }
    if (!status) {
        errors.push({ text: 'please add status' });
    }
    if (!desc) {
        errors.push({ text: 'please add desc' });
    }
    //check errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            item_code,
            title,
            status,
            desc,
            quantity,
            rating,
            rating_count,
            price,
            discount,
            image
        })
    } else {
        Products.create({
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