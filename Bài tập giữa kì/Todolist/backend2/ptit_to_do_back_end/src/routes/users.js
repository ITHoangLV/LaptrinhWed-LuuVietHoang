const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/to', userController.getAllUsers);
router.post('/to', userController.createUser);
router.put('/to/:id', userController.updateUser);
router.delete('/to/:id', userController.deleteUser);


module.exports = router;