const Product = require('../models/user.js');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createProduct = (req, res) => {
    const { name, email, mobile, password } = req.body;
    Product.create(name, email, mobile, password, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({message: 'Product created successfully'});
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const {name, email, mobile, password } = req.body;
    Product.update(id, name, email, mobile, password, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Product updated successfully'});
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    Product.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Product delete successfully'});
    });
};
