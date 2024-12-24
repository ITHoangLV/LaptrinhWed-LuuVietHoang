const { db } = require("../config/db.js");

// Lấy tất cả người dùng
exports.getAllAccount = async () => {
  const [rows] = await db.query("SELECT * FROM account");

  return rows;
};

// Lấy tất cả người dùng theo ID
exports.getAccountById = async (id) => {
  const [rows] = await db.query("SELECT * FROM account WHERE id = ?", [id]);
  return rows;
};

// Thêm tài khoản mới
exports.createNewAccount = async (data) => {
  const { userName, email, score, password, role } = data;
  const rows = await db.query(
    "INSERT INTO account (userName, email, score, password, role) VALUES (?, ?, ?, ?, ?)",
    [userName, email, score, password, role]
  );
  return rows;
};

// Đăng nhập
exports.login = async (data) => {
  const { email, password } = data;
  const [rows] = await db.query(
    "SELECT * FROM account WHERE email = ? AND password = ?",
    [email, password]
  );

  return rows;
};

// Cập nhật tài khoản
exports.updateAccount = async (data) => {
  const { userName, email, score, password, role, id } = data;
  const rows = await db.query(
    "UPDATE account SET userName = ?, email = ?, score = ?, password = ?, role = ? WHERE id = ?",
    [userName, email, score, password, role, id]
  );
  return rows;
};

// Xóa tài khoản
exports.deleteAccount = async (id) => {
  const rows = await db.query("DELETE FROM account WHERE id = ?", [id]);
  return rows;
};
