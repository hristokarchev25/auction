const router = require('express').Router();
const { Product } = require('../models/Product');

router.route('/all').get((req, res) => {

    Product.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

});

router.route('/add').post((req, res) => {
    const productCard = req.body;

    Product.create(productCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json(err));
});

module.exports = router;