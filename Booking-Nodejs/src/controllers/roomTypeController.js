const roomTypeModels = require("../models/roomTypeModels");

// Lấy tất cả phòng
exports.getAllRoomType = async (req, res) => {
  try {
    const [rows] = await roomTypeModels.getAllRoomType();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy phòng theo ID
exports.getRoomTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await roomTypeModels.getRoomTypeById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm phòng mới
exports.createNewTypeRoom = async (req, res) => {
  try {
    const rows = await roomTypeModels.createNewRoomType(req.body);
    res.status(201).json({ message: "Tạo phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật tài khoản
exports.updateRoomType = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const rows = await roomTypeModels.updateRoomType({
      description,
      name,
      id,
    });
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }

    res.json({ message: "Cập nhật phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa tài khoản
exports.deleteRoomType = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await roomTypeModels.deleteRoomType(id);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }
    res.json({ message: "Xóa phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
