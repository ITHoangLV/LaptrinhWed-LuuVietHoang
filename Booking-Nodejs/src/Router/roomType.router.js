const express = require('express');
const router = express.Router();
const {db} = require('../db');

// Lấy tất cả các loại phòng
router.get('/', async (req, res) => {
  try {
    const [roomTypes] = await db.query('SELECT * FROM roomtypes');
    res.json(roomTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm loại phòng mới
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    await db.query('INSERT INTO roomtypes (name, description) VALUES (?, ?)', 
      [name, description]);
    res.status(201).json({ message: 'Tạo loại phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
