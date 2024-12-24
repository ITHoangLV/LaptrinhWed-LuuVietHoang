const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController.js");
const { db } = require("../config/db.js");



router.get("/", accountController.getAllAccount);

// Lấy tài khoản theo id
router.get("/:id", accountController.getAccountById);

// Thêm tài khoản mới
router.post("/", accountController.createNewAccount);

// Đăng nhập
router.post("/login", accountController.login);

// Cập nhật tài khoản
router.put("/:id", accountController.updateAccount);

// Xóa tài khoản
router.delete("/:id", accountController.deleteAccount);

module.exports = router;
