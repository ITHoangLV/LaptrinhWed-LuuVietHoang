const { db } = require("../config/db.js");

// Lấy tất cả phòng
exports.getAllRoom = async () => {
  const rows = await db.query("SELECT * FROM rooms");
  return rows;
};

// Lấy phòng theo ID
exports.getRoomById = async (id) => {
  const rows = await db.query("SELECT * FROM rooms WHERE id = ?", [id]);
  return rows;
};

// Thêm phòng mới
exports.createNewRoom = async (data) => {
  const { image, price, description, location, roomtypeId, name } = data;
  const [rows] = await db.query(
    "INSERT INTO rooms (image, price, description, location, roomtypeId, name) VALUES (?, ?, ?, ?, ?, ?)",
    [image, price, description, location, roomtypeId, name]
  );
  return rows;
};

// Cập nhật phòng
exports.updateRoom = async (data) => {
  const { image, price, description, location, roomtypeId, name, id } = data;
  const [rows] = await db.query(
    "UPDATE rooms SET image = ?, price = ?, description = ?, location = ?, roomtypeId = ?, name = ? WHERE id = ?",
    [image, price, description, location, roomtypeId, name, id]
  );
  return rows;
};

// Xóa phòng
exports.deleteRoom = async (id) => {
  const [rows] = await db.query("DELETE FROM rooms WHERE id = ?", [id]);
  return rows;
};
