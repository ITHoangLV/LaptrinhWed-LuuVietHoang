const express = require("express");
const router = express.Router();
const roomTypeController = require("../controllers/roomTypeController");


// Lấy tất cả các loại phòng (READ)
router.get("/", roomTypeController.getAllRoomType);

// Lấy một loại phòng cụ thể theo ID (READ)
router.get("/:id", roomTypeController.getRoomTypeById);

// Thêm loại phòng mới (CREATE)
router.post("/", roomTypeController.createNewTypeRoom);

// Cập nhật loại phòng theo ID (UPDATE)
router.put("/:id", roomTypeController.updateRoomType);

// Xóa loại phòng theo ID (DELETE)
router.delete("/:id", roomTypeController.deleteRoomType);

module.exports = router;
