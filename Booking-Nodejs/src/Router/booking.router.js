const express = require('express');
const router = express.Router();
const { db } = require('../db');

// Lấy tất cả các đặt phòng
router.get('/', async (req, res) => {
  try {
    const [bookings] = await db.query(`
      SELECT id, bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod 
      FROM booking
    `);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy thông tin đặt phòng theo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [booking] = await db.query(`
      SELECT id, bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod 
      FROM booking 
      WHERE id = ?
    `, [id]);
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
  const { bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod } = req.body;
  console.log(bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod)
  try {
    await db.query(`
      INSERT INTO booking (bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
      [bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod]);
    res.status(201).json({ message: 'Đặt phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật thông tin đặt phòng
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod } = req.body;
 
  try {
    await db.query(`
      UPDATE booking 
      SET bookingName = ?, bookingEmail = ?, bookingPhone = ?, checkInDate = ?, checkOutDate = ?, bookingRoomId = ?, bookingStatus = ?, paymentStatus = ?, paymentMethod = ? 
      WHERE id = ?`, 
      [bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, 0, paymentStatus, paymentMethod, id]);
    res.json({ message: 'Cập nhật đặt phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa đặt phòng
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM booking WHERE id = ?', [id]);
    res.json({ message: 'Xóa đặt phòng thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
