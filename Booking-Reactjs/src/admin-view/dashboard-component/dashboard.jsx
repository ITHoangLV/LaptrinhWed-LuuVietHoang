import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "./room-component/product";
import Category from "./roomtype-component/category";
import Booking from "../../admin-view/dashboard-component/booking-component/booking";
import Account from "../../admin-view/dashboard-component/account-component/account";
import News from "../../admin-view/dashboard-component/new-component/news";
function Dashboard() {
  const navigate = useNavigate(); // Sử dụng để điều hướng

  // Kiểm tra token khi component được render
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Nếu không có token, điều hướng về trang đăng nhập
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <div className="sidebar">
      <Link to="/">
              <span style={{ color: "white" }}><h2>Quản lý</h2></span>
      </Link>{" "}
        <ul>
          <li>
            <Link to="/admin/category">
              <span style={{ color: "white" }}>Danh Mục</span>
            </Link>{" "}
            {/* Đổi tên đường dẫn */}
          </li>
          <li>
            <Link to="/admin/product">
              <span style={{ color: "white" }}>Loại Phòng </span>
            </Link>
          </li>

          <li>
            <Link to="/admin/bookings">
              {" "}
              <span style={{ color: "white" }}>Đơn Đặt Phòng </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/news">
              {" "}
              <span style={{ color: "white" }}>Tin tức</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/accounts">
              <span style={{ color: "white" }}>Tài khoản</span>
            </Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              // Xóa token khỏi localStorage
              localStorage.removeItem("token");

              // Điều hướng về trang đăng nhập
              navigate("/login");
            }}
          >
            Đăng Xuất
          </li>
        </ul>
      </div>

      <div className="main-content">
        <header>
          <h1>Chào mừng đến với trang quản trị</h1>
        </header>

        <section>
          {/* Định nghĩa các route ở đây */}
          <Routes>
            <Route path="" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="product" element={<Product />} />
            {/* Thêm các route khác tương ứng */}
            <Route path="accounts" element={<Account />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="news" element={<News />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
