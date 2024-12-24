const bookingModels = require("../models/bookingModels");

// Lấy tất cả phòng
exports.getAllBooking = async (req, res) => {
  try {
    const [rows] = await bookingModels.getAllBooking();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy phòng theo ID
exports.getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await bookingModels.getBookingById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Đơn đặt phòng không tồn tại !" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm phòng mới
exports.createNewBooking = async (req, res) => {
  console.log(req.body);

  try {
    const rows = await bookingModels.createNewBooking(req.body);
    res.status(201).json({ message: "Đặt phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật tài khoản
exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const {
    bookingName,
    bookingEmail,
    bookingPhone,
    checkInDate,
    checkOutDate,
    bookingRoomId,
    bookingStatus,
    paymentStatus,
    paymentMethod,
    surcharge,
    totalFee,
  } = req.body;

  try {
    const rows = await bookingModels.updateBooking({
      bookingName,
      bookingEmail,
      bookingPhone,
      checkInDate,
      checkOutDate,
      bookingRoomId,
      bookingStatus,
      paymentStatus,
      paymentMethod,
      surcharge,
      totalFee,
      id,
    });
    res.json({ message: "Cập nhật đặt phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa tài khoản
exports.deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await bookingModels.deleteBooking(id);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Phòng không tồn tại" });
    }
    res.json({ message: "Xóa đặt phòng thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
