const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.get("/", bookingController.getAllBooking);

// Lấy thông tin đặt phòng theo ID
router.get("/:id", bookingController.getBookingById);

// Tạo mới một đặt phòng
router.post("/", bookingController.createNewBooking);

// Cập nhật thông tin đặt phòng
router.put("/:id", bookingController.updateBooking);

// Xóa đặt phòng
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
