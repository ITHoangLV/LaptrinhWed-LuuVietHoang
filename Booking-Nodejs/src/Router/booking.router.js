const express = require('express');
const router = express.Router();
const db = require('../db');

// Lấy tất cả các đặt phòng
router.get('/', async (req, res) => {
  try {
    const [bookings] = await db.query('SELECT * FROM bookings');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy thông tin đặt phòng theo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [booking] = await db.query('SELECT * FROM bookings WHERE id = ?', [id]);
    if (booking.length === 0) {
      return res.status(404).json({ message: 'Đặt phòng không tồn tại' });
    }
    res.json(booking[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tạo mới một đặt phòng
router.post('/', async (req, res) => {
  const { roomId, accountId, checkInDate, checkOutDate, status } = req.body;
  try {
    await db.query('INSERT INTO bookings (roomId, accountId, checkInDate, checkOutDate, status) VALUES (?, ?, ?, ?, ?)', 
      [roomId, accountId, checkInDate, checkOutDate, status]);
    res.status(201).json({ message: 'Đặt phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật thông tin đặt phòng
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { roomId, accountId, checkInDate, checkOutDate, status } = req.body;
  try {
    await db.query('UPDATE bookings SET roomId = ?, accountId = ?, checkInDate = ?, checkOutDate = ?, status = ? WHERE id = ?', 
      [roomId, accountId, checkInDate, checkOutDate, status, id]);
    res.json({ message: 'Cập nhật đặt phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa đặt phòng
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM bookings WHERE id = ?', [id]);
    res.json({ message: 'Xóa đặt phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
