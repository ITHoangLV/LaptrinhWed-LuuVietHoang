const { db } = require("../config/db.js");

// Lấy tất cả phòng
exports.getAllBooking = async () => {
  const rows = await db.query(`
    SELECT id, bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod, surcharge, totalFee 
    FROM booking
  `);
  return rows;
};

// Lấy phòng theo ID
exports.getBookingById = async (id) => {
  const rows = await db.query(
    `
    SELECT id, bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod, surcharge, totalFee
    FROM booking 
    WHERE id = ?
  `,
    [id]
  );
  return rows;
};

// Thêm phòng mới
exports.createNewBooking = async (data) => {
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
  } = data;
  const rows = await db.query(
    `INSERT INTO booking (bookingName, bookingEmail, bookingPhone, checkInDate, checkOutDate, bookingRoomId, bookingStatus, paymentStatus, paymentMethod, surcharge, totalFee) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
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
    ]
  );
  return rows;
};

// Cập nhật phòng
exports.updateBooking = async (data) => {
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
    id,
  } = data;
  const [rows] = await db.query(
    `
    UPDATE booking 
    SET bookingName = ?, bookingEmail = ?, bookingPhone = ?, checkInDate = ?, checkOutDate = ?, bookingRoomId = ?, bookingStatus = ?, paymentStatus = ?, paymentMethod = ?, surcharge = ?, totalFee = ? 
    WHERE id = ?`,
    [
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
    ]
  );
  return rows;
};

// Xóa phòng
exports.deleteBooking = async (id) => {
  const rows = await db.query("DELETE FROM booking WHERE id = ?", [id]);
  return rows;
};
