const express = require('express');
const router = express.Router();
const {db} = require('../db');

// Lấy danh sách tất cả các tin tức
router.get('/', async (req, res) => {
  try {
    const [news] = await db.query('SELECT * FROM news');
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy tin tức theo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [newsItem] = await db.query('SELECT * FROM news WHERE id = ?', [id]);
    if (newsItem.length === 0) {
      return res.status(404).json({ message: 'Tin tức không tồn tại' });
    }
    res.json(newsItem[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm mới một tin tức
router.post('/', async (req, res) => {
  const { title, content, createdAt } = req.body;
  try {
    await db.query('INSERT INTO news (title, content, createdAt) VALUES (?, ?, ?)', 
      [title, content, createdAt]);
    res.status(201).json({ message: 'Tạo tin tức thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật tin tức
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, createdAt } = req.body;
  try {
    await db.query('UPDATE news SET title = ?, content = ?, createdAt = ? WHERE id = ?', 
      [title, content, createdAt, id]);
    res.json({ message: 'Cập nhật tin tức thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa tin tức
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM news WHERE id = ?', [id]);
    res.json({ message: 'Xóa tin tức thành công' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
