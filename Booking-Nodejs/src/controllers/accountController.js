const accountModels = require("../models/accountModels.js");

// Lấy tất cả người dùng
exports.getAllAccount = async (req, res) => {
  try {
    const rows = await accountModels.getAllAccount();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy tất cả người dùng theo ID
exports.getAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await accountModels.getAccountById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Tài khoản không tồn tại" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm tài khoản mới
exports.createNewAccount = async (req, res) => {
  try {
    const [rows] = await accountModels.createNewAccount(req.body);
    res.status(201).json({ message: "Tạo tài khoản thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Đăng nhập
exports.login = async (req, res) => {
  try {
    const [rows] = await accountModels.login(req.body);
    if (rows.length === 0) {
      // Nếu không tìm thấy tài khoản nào khớp
      return res
        .status(401)
        .json({ message: "Thông tin đăng nhập không chính xác" });
    }

    // Nếu tìm thấy tài khoản hợp lệ
    res.json({ message: "Đăng nhập thành công", account: rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật tài khoản
exports.updateAccount = async (req, res) => {
  const { id } = req.params;
  const { userName, email, score, password, role } = req.body;
  try {
    const [rows] = await accountModels.updateAccount({
      userName,
      email,
      score,
      password,
      role,
      id,
    });
    res.json({ message: "Cập nhật tài khoản thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa tài khoản
exports.deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await accountModels.deleteAccount(id);
    res.json({ message: "Xóa tài khoản thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
