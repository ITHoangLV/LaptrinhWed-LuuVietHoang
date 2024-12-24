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
                src="https://noithatdephelen.com/Uploads/images/2020/ban-hop/HL131.jpg"
                alt="Meeting Room"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5">Chào mừng quý khách</h1>
              <p className="lead">
                Tại khách sạn của chúng tôi, chúng tôi mang đến không gian thoải
                mái và dịch vụ chất lượng cho mọi du khách. Với các loại phòng
                phong phú, lịch sử và tiện nghi hiện đại, chúng tôi cam kết mang
                đến trải nghiệm tuyệt vời nhất cho quý khách.
              </p>
              <p>
                Chúng tôi tự hào về dịch vụ khách hàng xuất sắc và cam kết mang
                đến trải nghiệm tuyệt vời cho bạn. Hãy đến với chúng tôi và trải
                nghiệm không gian lịch sụ sang trọng này
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <h2>Về Phòng Họp </h2>
              <p>
                Với đội ngũ nhân viên chuyên nghiệp và nhiệt tình, chúng tôi
                luôn sẵn sàng đáp ứng mọi yêu cầu và mang đến cho khách hàng
                những trải nghiệm khó quên khi đặt niềm tin tại đây.
              </p>
              <ul>
                <li>Wifi tốc độ cao, băng tần kép</li>
                <li>
                  Điều hoà/Máy lạnh/Thang máy vô cùng hiệu quả, được bảo trì
                  định kỳ
                </li>
                <li>Bàn ghế được nhập khẩu </li>
                <li>Tính bảo mật thông tin cuộc họp cao </li>
                <li>
                  Nhiều kích cỡ máy chiếu giúp khách hàng dễ dàng trong việc lựa
                  chọn phòngphòng
                </li>
                <li>Đội ngũ nhân viên chuyên nghiệp </li>
                <li>Tiết kiệm và nhanh chóng </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src="https://dplusvn.com/wp-content/uploads/2020/01/tieu-chuan-vi-tri-dat-phong-hop.jpg"
                alt="Meeting Room"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src="https://4.bp.blogspot.com/-EQA-6cchhNE/WbesdpVsUUI/AAAAAAAAAKo/zAYyusjf4JgrkHOrNIuZi3MyLjy0JteIQCLcBGAs/s1600/ban-ghe-phong-hop-gia-re.jpg"
                  className="card-img-top"
                  alt="Meeting Room"
                />
                <div className="card-body">
                  <h5 className="card-title">Phòng Họp Đẹp</h5>
                  <p className="card-text">
                    Chúng tôi cam kết mang đến các phòng họp tiện nghi và đầy đủ
                    các dịch vụ cho quý khách.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/R.a3b5ee47e8e938f8c328a9fcccfaa88b?rik=6FoDbNhSOpyxBA&pid=ImgRaw&r=0"
                  className="card-img-top"
                  alt="Event Decoration"
                />
                <div className="card-body">
                  <h5 className="card-title">Tiện Nghi Vượt Trội</h5>
                  <p className="card-text">
                    Với các phòng hiện đại, mới mẻ và đa dạng, dịch vụ của chúng
                    tôi luôn đảm bảo mang đến sự hài lòng tối đa cho khách hàng.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/R.c2c937217cc75fdd5ce9911ff3045293?rik=sEiVyOw%2bADS3yQ&riu=http%3a%2f%2fvietnoithat.com%2fimages%2fupload%2fImage%2fnoi-that-phong-hop-an-tuong-hien-dai-7.jpg&ehk=fegKMkFc0%2b%2bZeAYgmsNfTsb8yMN6%2f9EP2dvxQPQnrHs%3d&risl=&pid=ImgRaw&r=0"
                  className="card-img-top"
                  alt="Special Offers"
                />
                <div className="card-body">
                  <h5 className="card-title">Ưu Đãi Đặc Biệt</h5>
                  <p className="card-text">
                    Khám phá các ưu đãi đặc biệt và chương trình giảm giá cho
                    khách hàng thân thiết tại phòng họp của chúng tôi.
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
