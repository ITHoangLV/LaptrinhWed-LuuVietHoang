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
                  <h4>Đặt Phòng Cùng Hoàng </h4>
                  <div className="footer-title-line"></div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/200/929/original/pdg-letter-logo-design-with-polygon-shape-pdg-polygon-and-cube-shape-logo-design-pdg-hexagon-logo-template-white-and-black-colors-pdg-monogram-business-and-real-estate-logo-vector.jpg"
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
                    Đặt Phòng Nhanh <br /> Tiết kiệm thời gian và tiền
                    bạc!
                  </p>
                  <ul className="footer-adress">
                    <li>
                      <i className="pe-7s-map-marker strong"> </i>{" "}
                      <a href="https://maps.app.goo.gl/GKDUdMrkw8GwNKYQ9">
                        <p style={{ color: "white", marginBottom:"0" }}>
                        Số 686 Đường 1 chiều, P Manchester , Ba Đình, Hà nội
                        </p>
                      </a>
                    </li>
                    <li>
                      <i className="pe-7s-mail strong"> </i>{" "}
                      <a href="mailto:support.eco@gmail.com">
                        <p style={{ color: "white", marginBottom:"0" }}>support.mafia@gmail.com</p>
                      </a>
                    </li>
                    <li>
                      <i className="pe-7s-call strong"> </i>{" "}
                      <a href="tel:+84 835778789">
                      <p style={{ color: "white", marginBottom:"0"  }}>+84 123456789</p></a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight animated"
                style={{ height: "300px" }}
              >
                
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight animated"
                style={{ height: "300px" }}
              >
                <div className="single-footer news-letter">
                  <h4>Hỗ trợ khách hàng </h4>
                  <div className="footer-title-line"></div>
                  <p>
                    Tiêu chí của phòng họp luôn mong muốn cho người dùng trải
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
                  &copy; {new Date().getFullYear()} Phòng họp cùng Hoàng. All
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
