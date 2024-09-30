import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-light navbar-light">
        <Link to="#" className="logo navbar-brand mx-4 mb-3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/194/935/non_2x/global-admin-icon-color-outline-vector.jpg"
            alt="logo"
            className="img-fluid"
            width="80"
          />
        </Link>
        <div className="navbar-nav w-100">
          <div
            className="nav-item nav-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            {" "}
            <i className="fa fa-laptop me-2"></i>{" "}
            <Link className="dropdown-item" to="/admin/roomtypes">
              Loại Phòng
            </Link>
          </div>
          <div
            className="nav-item nav-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            {" "}
            <i className="fa fa-laptop me-2"></i>{" "}
            <Link className="dropdown-item" to="/admin/rooms">
              Phòng
            </Link>
          </div>
          <div
            className="nav-item nav-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            {" "}
            <i className="fa fa-laptop me-2"></i>{" "}
            <Link className="dropdown-item" to="/admin/accounts">
              Tài Khoản
            </Link>
          </div>

          <div
            className="nav-item nav-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            {" "}
            <i className="fa fa-laptop me-2"></i>{" "}
            <Link className="dropdown-item" to="/admin/bookings">
              Đặt Phòng
            </Link>
          </div>

          <div
            className="nav-item nav-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            {" "}
            <i className="fa fa-laptop me-2"></i>{" "}
            <Link className="dropdown-item" to="/admin/news">
              Tin Tức
            </Link>
          </div>

          <div
            className="nav-item nav-link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            {" "}
            <i className="fa fa-laptop me-2"></i>{" "}
            <Link className="dropdown-item" to="/">
              Đăng Xuất
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
