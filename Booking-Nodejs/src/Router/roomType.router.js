const express = require('express');
const router = express.Router();
const { db } = require('../db');

// Lấy tất cả các loại phòng (READ)
router.get('/', async (req, res) => {
  try {
    const [roomTypes] = await db.query('SELECT * FROM roomtypes');
    res.json(roomTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy một loại phòng cụ thể theo ID (READ)
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [roomType] = await db.query('SELECT * FROM roomtypes WHERE id = ?', [id]);
    if (roomType.length === 0) {
      return res.status(404).json({ message: 'Loại phòng không tồn tại' });
    }
    res.json(roomType[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm loại phòng mới (CREATE)
router.post('/', async (req, res) => {
  const { name, description, image } = req.body; // Thêm thuộc tính image vào đây
  try {
    await db.query('INSERT INTO roomtypes (name, description, image) VALUES (?, ?, ?)', 
      [name, description, image]);
    res.status(201).json({ message: 'Tạo loại phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật loại phòng theo ID (UPDATE)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body; // Thêm thuộc tính image vào đây
  try {
    const [result] = await db.query('UPDATE roomtypes SET name = ?, description = ?, image = ? WHERE id = ?', 
      [name, description, image, id]); // Thêm image vào câu lệnh cập nhật
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Loại phòng không tồn tại' });
    }
    res.json({ message: 'Cập nhật loại phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa loại phòng theo ID (DELETE)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM roomtypes WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Loại phòng không tồn tại' });
    }
    res.json({ message: 'Xóa loại phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
