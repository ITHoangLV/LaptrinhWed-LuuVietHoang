const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

// Lấy thông tin chi tiết của một phòng theo ID
router.get("", roomController.getAllRoom);
// Lấy thông tin chi tiết của một phòng theo ID
router.get("/:id", roomController.getRoomById);

// Thêm phòng mới
router.post("/", roomController.createNewRoom);

// Cập nhật thông tin phòng theo ID
router.put("/:id", roomController.updateRoom);

// Xóa phòng theo ID
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
