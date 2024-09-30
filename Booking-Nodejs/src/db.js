const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '127.0.0.1', // Localhost address
    port: 3306, // MySQL port
    user: 'root', // Thay thế bằng tài khoản MySQL của bạn
    password: '123456', // Thay thế bằng mật khẩu MySQL của bạn
    database: 'hotel_management', // Thay thế bằng tên database của bạn
  });

async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Kết nối MySQL thành công!');
    connection.release(); // Giải phóng kết nối sau khi kiểm tra thành công
  } catch (error) {
    console.error('Kết nối MySQL thất bại:', error.message);
  }
}

module.exports = { db, testConnection };
