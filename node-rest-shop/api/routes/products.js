const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling POST requests to /products'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if(!id){
        res.status(404).json({
            message : 'Product not found',
           
        });
    }else if(id === 'special'){
        res.status(200).json({
            message : 'You discovered the special ID',
            id : id
        });
    }else {
        res.status(200).json({
            message : 'You passed an ID',
            id : id
        })

    }
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message : 'Updated product !'
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product !'
    });
});

module.exports = router;