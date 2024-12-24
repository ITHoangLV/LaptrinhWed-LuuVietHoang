const { db } = require("../config/db.js");

// Lấy tất cả phòng
exports.getAllRoomType = async () => {
  const rows = await db.query("SELECT * FROM roomtypes");
  return rows;
};

// Lấy phòng theo ID
exports.getRoomTypeById = async (id) => {
  const rows = await db.query("SELECT * FROM roomtypes WHERE id = ?", [id]);
  return rows;
};

// Thêm phòng mới
exports.createNewRoomType = async (data) => {
  const { name, description } = data;
  const rows = await db.query(
    "INSERT INTO roomtypes (name, description) VALUES (?, ?)",
    [name, description]
  );
  return rows;
};

// Cập nhật phòng
exports.updateRoomType = async (data) => {
  const { name, description, id } = data;
  const [rows] = await db.query(
    "UPDATE roomtypes SET name = ?, description = ?  WHERE id = ?",
    [name, description, id]
  );
  return rows;
};

// Xóa phòng
exports.deleteRoomType = async (id) => {
  const rows = await db.query("DELETE FROM roomtypes WHERE id = ?", [id]);
  return rows;
};
