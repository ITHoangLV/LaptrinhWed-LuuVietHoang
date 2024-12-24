const roomModels = require("../models/roomModels");

// Lấy tất cả phòng
exports.getAllRoom = async (req, res) => {
  try {
    const [rows] = await roomModels.getAllRoom();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy phòng theo ID
exports.getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await roomModels.getRoomById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }

    res.json(rows[0][0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm phòng mới
exports.createNewRoom = async (req, res) => {
  try {
    const rows = await roomModels.createNewRoom(req.body);
    res.status(201).json({ message: "Tạo phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật tài khoản
exports.updateRoom = async (req, res) => {
  const { id } = req.params;
  const { image, price, description, location, roomtypeId, name } = req.body;

  try {
    const rows = await roomModels.updateRoom({
      image,
      price,
      description,
      location,
      roomtypeId,
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
exports.deleteRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await roomModels.deleteRoom(id);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }
    res.json({ message: "Xóa phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
