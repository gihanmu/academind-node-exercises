const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    })

    product.save().then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
    res.status(201).json({
        message : 'Handling POST requests to /products',
        createdProduct : product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(!id){
        res.status(404).json({
            message : 'Product not found',
           
        });
    }else{
        console.log(`Fetching products by id : ${id}`);
        Product.findById(id).then(product => {
            console.log(product);
            res.status(200).json({
                status : 'Success',
                product : product
            })
        }).catch(error => {
            res.status(404).json({
                status : 'error',
                message : error
            })
        })
      
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Updated product !'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product !'
    });
});

module.exports = router;