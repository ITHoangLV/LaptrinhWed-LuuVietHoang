const User = require('../models/user.js');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createUser = (req, res) => {
    const { name, email, mobile, password } = req.body;
    User.create(name, email, mobile, password, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({message: 'User created successfully'});
    });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const {name, email, mobile, password } = req.body;
    User.update(id, name, email, mobile, password, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'User updated successfully'});
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'User delete successfully'});
    });
};
