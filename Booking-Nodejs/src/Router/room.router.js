const express = require('express');
const router = express.Router();
const { db } = require('../db');

// Lấy danh sách tất cả các phòng
router.get('/', async (req, res) => {
  try {
    const [rooms] = await db.query('SELECT * FROM rooms');
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy thông tin chi tiết của một phòng theo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [room] = await db.query('SELECT * FROM rooms WHERE id = ?', [id]);
    if (room.length === 0) {
      return res.status(404).json({ message: 'Phòng không tồn tại' });
    }
    res.json(room[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm phòng mới
router.post('/', async (req, res) => {
  const { image, price, description, location, roomtypeId, name } = req.body;
  try {
    await db.query('INSERT INTO rooms (image, price, description, location, roomtypeId, name) VALUES (?, ?, ?, ?, ?, ?)', 
      [image, price, description, location, roomtypeId, name]);
    res.status(201).json({ message: 'Tạo phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật thông tin phòng theo ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { image, price, description, location, roomtypeId, name } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE rooms SET image = ?, price = ?, description = ?, location = ?, roomtypeId = ?, name = ? WHERE id = ?', 
      [image, price, description, location, roomtypeId, name, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Phòng không tồn tại' });
    }
    res.json({ message: 'Cập nhật phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa phòng theo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM rooms WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Phòng không tồn tại' });
    }
    res.json({ message: 'Xóa phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
