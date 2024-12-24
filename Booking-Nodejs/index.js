const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { testConnection } = require("./src/config/db.js");

const accountRouter = require("./src/Router/account.router");
const roomRouter = require("./src/Router/room.router");
const roomTypeRouter = require("./src/Router/roomType.router");
const bookingRouter = require("./src/Router/booking.router");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Định tuyến các router
app.use("/account", accountRouter);
app.use("/rooms", roomRouter);
app.use("/roomtypes", roomTypeRouter);
app.use("/booking", bookingRouter);


// Lắng nghe tại cổng 3000
// Kiểm tra kết nối MySQL khi server khởi động
testConnection();

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
