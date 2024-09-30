import React from "react";

function Footer() {
  return (
    <footer
      className="footer-area"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(1,1,1,1) 100%), url("https://hoabinhhotel.net.vn/vi/wp-content/uploads/2015/06/banner-hotel-04.jpg")`,
        marginTop: "50px",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="footer-area" style={{ color: "white" }}>
        <div className=" footer">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight animated"
                style={{ height: "300px" }}
              >
                <div className="single-footer">
                  <h4>Khách Sạn Xanh Lá </h4>
                  <div className="footer-title-line"></div>
                  <img
                    src="https://greenhadong.com/wp-content/uploads/2022/06/Logo-khach-san.png"
                    style={{
                      width: "220px",
                      height: "100px",
                      objectFit: "scale-down",
                    }}
                    alt="logo"
                    className="wow pulse"
                    data-wow-delay="1s"
                  />
                  <p>
                    Khách sạn xanh, sạch, đẹp <br /> Tiết kiệm thời gian và tiền
                    bạc!
                  </p>
                  <ul className="footer-adress">
                    <li>
                      <i className="pe-7s-map-marker strong"> </i>{" "}
                      <a href="https://maps.app.goo.gl/GKDUdMrkw8GwNKYQ9">
                        <p style={{ color: "white", marginBottom:"0" }}>
                          Số 10 P. Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà
                          Nội, Việt Nam
                        </p>
                      </a>
                    </li>
                    <li>
                      <i className="pe-7s-mail strong"> </i>{" "}
                      <a href="mailto:support.eco@gmail.com">
                        <p style={{ color: "white", marginBottom:"0" }}>support.eco@gmail.com</p>
                      </a>
                    </li>
                    <li>
                      <i className="pe-7s-call strong"> </i>{" "}
                      <a href="tel:+84 835778789">
                      <p style={{ color: "white", marginBottom:"0"  }}>+84 835778789</p></a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight animated"
                style={{ height: "300px" }}
              >
                <div className="single-footer">
                  <h4>VỀ CHÚNG TÔI </h4>
                  <div className="footer-title-line"></div>
                  <ul className="footer-menu">
                    <li>
                    
                      <a href="./about"><p style={{ color: "white", marginBottom:"0" }}>Khám Phá Khách Sạn</p></a>{" "}
                    </li>
                    <li>
                      <a href="./cuisine"><p style={{ color: "white", marginBottom:"0" }}>Ẩm Thực</p></a>{" "}
                    </li>
                    <li>
                      <a href="./event"><p style={{ color: "white", marginBottom:"0" }}>Họp & Sự Kiện</p></a>{" "}
                    </li>
                    <li>
                      <a href="./roomtypes"><p style={{ color: "white", marginBottom:"0" }}>Các Loại Dịch Vụ Phòng</p></a>{" "}
                    </li>
                    <li>
                      <a href="./contact"><p style={{ color: "white", marginBottom:"0" }}>Liên Hệ</p></a>
                    </li>
                    <li>
                      <a href="./recruit"><p style={{ color: "white", marginBottom:"0" }}>Thông Tin Tuyển Dụng</p></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight animated"
                style={{ height: "300px" }}
              >
                <div className="single-footer news-letter">
                  <h4>Kết Nối</h4>
                  <div className="footer-title-line"></div>
                  <p>
                    Tiêu chí của phòng trọ luôn mong muốn cho người dùng trải
                    nghiệm tốt nhất khi ở đây
                  </p>

                  <form>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="E-mail ... "
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-primary subscribe"
                          type="button"
                          onClick={() => {
                            alert(
                              "Đã đăng ký nhận thông báo. Vui lòng kiểm tra email để cập nhật những tin tức và khuyến mãi mới nhất!"
                            );
                          }}
                        >
                          Nhận thông báo
                          <i className="pe-7s-paper-plane pe-2x"></i>
                        </button>
                      </span>
                    </div>
                  </form>

                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div className="incon-lienhe">
                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                    <div className="incon-lienhe">
                      <a href="#">
                        <i className="fa-solid fa-phone"></i>
                      </a>
                    </div>
                    <div className="incon-lienhe">
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                    <div className="incon-lienhe">
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight animated"
                style={{ height: "300px" }}
              >
                <div className="single-footer news-letter">
                  <h4>Chính Sách</h4>
                  <div className="footer-title-line"></div>
                  <ul className="footer-menu">
                    <li>
                      <a href="#"><p style={{ color: "white", marginBottom:"0" }}>Hình Thức Đặt Phòng</p></a>{" "}
                    </li>
                    <li>
                      <a href="#"><p style={{ color: "white", marginBottom:"0" }}>Hình Thức Thanh Toán</p></a>{" "}
                    </li>
                    <li>
                      <a href="#"><p style={{ color: "white", marginBottom:"0" }}>Chính Sách Hủy Phòng</p></a>
                    </li>
                    <li>
                      <a href="#"><p style={{ color: "white", marginBottom:"0" }}>Điều Khoản và Điều Kiện</p></a>
                    </li>
                    <li>
                      <a href="#"><p style={{ color: "white", marginBottom:"0" }}>FAQ</p></a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copywrite Text */}
            </div>
          </div>
        </div>
        <div className="footer-copy text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copywrite-text mt-30">
                  &copy; {new Date().getFullYear()} Khách Sạn Xanh Lá. All
                  Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
