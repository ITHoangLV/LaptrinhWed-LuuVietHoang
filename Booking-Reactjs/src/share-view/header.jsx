import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [roomTypes, setRoomTypes] = useState([]);

  // Fetch room types from the server
  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const response = await axios.get("http://localhost:3002/roomtypes");
        setRoomTypes(response.data || []);
      } catch (error) {
        console.error("Error fetching room types:", error);
      }
    };
    fetchRoomTypes();
  }, []);
  return (
    <header style={{
      background: "linear-gradient(to right, #64b3f4, #c2e59c)",
    }}>
      <div className="container py-2" style={{ height: "113px" }}>
        <div className="row py-4 pb-0 pb-sm-4 align-items-center">
          {/* Logo section */}
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <Link to="/">
                <img
                  src="https://greenhadong.com/wp-content/uploads/2022/06/Logo-khach-san.png"
                  alt="logo"
                  className="img-fluid"
                  width="80"
                />
              </Link>
            </div>
          </div>

          {/* Search bar section */}
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar border rounded-2 px-3 border-dark-subtle">
              <form
                id="search-form"
                className="text-center d-flex align-items-center"
                action=""
                method=""
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Tìm kiếm trong hơn 100 phòng nghỉ của chúng tôi!"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                  ></path>
                </svg>
              </form>
            </div>
          </div>

          {/* Cart and User section */}
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="dropdown avatar">
              <Link className="dropdown-item" to="/login">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation section */}
      <div className="container-fluid">
        <hr className="m-0" />
      </div>
      <div className="container" style={{zIndex:"999"}}>
        <div className="nav-bar-container">
          <nav className="nav-bar">
            <ul className="ul-nav-bar">
              <li>
                <div className="btn-group">
                  <Link to="/">Trang Chủ</Link>
                </div>
              </li>
              <li>
                <div className="btn-group">
                  <Link to="/roomtypes">Loại Phòng</Link>
                  <ul className="dropdown-menu" role="menu" style={{ width: "200px" }}>
                    {roomTypes.map((roomType) => (
                      <li key={roomType.id}>
                        <Link to={`/roomTypesDetail/${roomType.id}`}>
                          {roomType.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <div className="btn-group">
                  <Link to="/roomsview">Phòng</Link>
                </div>
              </li>
              <li>
                <div className="btn-group">
                  <Link to="/about">Khám Phá Khách Sạn</Link>
                </div>
              </li>
              <li>
                <div className="btn-group">
                  <Link to="/cuisine">Ẩm Thực</Link>
                </div>
              </li>
              <li>
                <div className="btn-group">
                  <Link to="/event">Họp & Sự Kiện</Link>
                  <ul className="dropdown-menu" role="menu" style={{width:"180px"}}>
                    <li>
                      <a href="/event">Tổ Chức Sự Kiện</a>
                    </li>
                    <li>
                      <a href="/meeting">Hội Thảo - Hội Họp</a>
                    </li>
                    <li>
                      <a href="/wedding">Lễ Cưới</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="btn-group">
                  <Link to="/blog">Tin Tức</Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
