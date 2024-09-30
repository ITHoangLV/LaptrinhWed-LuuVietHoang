const express = require('express');
const router = express.Router();
const {db} = require('../db');

// Lấy danh sách tất cả các tài khoản
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM account');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy tài khoản theo id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM account WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Tài khoản không tồn tại' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm tài khoản mới
router.post('/', async (req, res) => {
  const { userName, email, score, password, role } = req.body;
  try {
    await db.query('INSERT INTO account (userName, email, score, password, role) VALUES (?, ?, ?, ?, ?)', 
      [userName, email, score, password, role]);
    res.status(201).json({ message: 'Tạo tài khoản thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Đăng nhập
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // Tìm kiếm tài khoản dựa trên email và password
      const [rows] = await db.query('SELECT * FROM account WHERE email = ? AND password = ?', [email, password]);
  
      if (rows.length === 0) {
        // Nếu không tìm thấy tài khoản nào khớp
        return res.status(401).json({ message: 'Thông tin đăng nhập không chính xác' });
      }
  
      // Nếu tìm thấy tài khoản hợp lệ
      res.json({ message: 'Đăng nhập thành công', account: rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
// Cập nhật tài khoản
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { userName, email, score, password, role } = req.body;
  try {
    await db.query('UPDATE account SET userName = ?, email = ?, score = ?, password = ?, role = ? WHERE id = ?', 
      [userName, email, score, password, role, id]);
    res.json({ message: 'Cập nhật tài khoản thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa tài khoản
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM account WHERE id = ?', [id]);
    res.json({ message: 'Xóa tài khoản thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
