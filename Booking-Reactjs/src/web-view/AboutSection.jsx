// AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="container-fluid">
        <hr className="m-0" />
      </div>
      <div className="container">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="public/img/introBanner/1.png"
                alt="Hotel"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5">
                Chào Mừng Quý Khách Đến Với Khách Sạn Xanh Lá
              </h1>
              <p className="lead">
                Tại khách sạn của chúng tôi, chúng tôi mang đến không gian thoải
                mái và dịch vụ chất lượng cho mọi du khách. Với các loại phòng
                phong phú và tiện nghi hiện đại, chúng tôi cam kết mang đến trải
                nghiệm nghỉ ngơi tuyệt vời nhất cho quý khách.
              </p>
              <p>
                Chúng tôi tự hào về dịch vụ khách hàng xuất sắc và cam kết mang
                đến trải nghiệm lưu trú tuyệt vời cho bạn. Hãy đến với chúng tôi
                và trải nghiệm không gian ấm cúng và tiện nghi của Khách Sạn
                Xanh Lá.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <h2>Về Khách Sạn</h2>
              <p>
                Với đội ngũ nhân viên chuyên nghiệp và nhiệt tình, chúng tôi
                luôn sẵn sàng đáp ứng mọi yêu cầu và mang đến cho khách hàng
                những trải nghiệm khó quên khi lưu trú tại đây.
              </p>
              <ul>
                <li>Dịch vụ phục vụ phòng 24/24</li>
                <li>Wifi tốc độ cao, băng tần kép</li>
                <li>
                  Điều hoà/Máy lạnh/Thang máy vô cùng hiệu quả, được bảo trì
                  định kỳ
                </li>
                <li>Truyền hình vệ tinh với hơn 200 kênh trên toàn quốc</li>
                <li>Két an toàn với mật mã điện tử</li>
                <li>Dịch vụ giặt ủi quần áo</li>
                <li>Dịch vụ trông trẻ</li>
                <li>Dịch vụ thu đổi ngoại tệ</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src="public/img/introBanner/2.png"
                alt="Hotel"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <img
                src="public/img/introBanner/3.png"
                alt="Hotel"
                className="img-fluid"
                height={"3px"}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <img
                src="public/img/introBanner/4.png"
                alt="Hotel"
                className="img-fluid"
                height={"3px"}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <img
                src="public/img/introBanner/5.png"
                alt="Hotel"
                className="img-fluid"
                height={"3px"}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src="public/img/11.png"
                  className="card-img-top"
                  alt="Hotel Room"
                />
                <div className="card-body">
                  <h5 className="card-title">Phòng Khách Sạn Đẹp</h5>
                  <p className="card-text">
                    Chúng tôi cam kết mang đến các phòng nghỉ tiện nghi và đầy
                    đủ các dịch vụ cho quý khách.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src="public/img/13.png"
                  className="card-img-top"
                  alt="Event Decoration"
                />
                <div className="card-body">
                  <h5 className="card-title">Tiện Nghi Vượt Trội</h5>
                  <p className="card-text">
                    Với các dịch vụ giải trí và ẩm thực đa dạng, khách sạn của
                    chúng tôi luôn đảm bảo mang đến sự hài lòng tối đa cho khách
                    hàng.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src="public/img/12.png"
                  className="card-img-top"
                  alt="Special Offers"
                />
                <div className="card-body">
                  <h5 className="card-title">Ưu Đãi Đặc Biệt</h5>
                  <p className="card-text">
                    Khám phá các ưu đãi đặc biệt và chương trình giảm giá cho
                    khách hàng thân thiết tại khách sạn chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
