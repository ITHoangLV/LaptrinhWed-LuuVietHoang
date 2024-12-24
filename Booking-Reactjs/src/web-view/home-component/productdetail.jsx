// ProductDetail.jsx
import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../share-view/header";
import Footer from "../../share-view/footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [product, setProduct] = useState(null);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    bookingName: "",
    bookingEmail: "",
    bookingPhone: "",
    checkInDate: "",
    checkOutDate: "",
    bookingRoomId: id,
    paymentStatus: 0,
    paymentMethod: 0,
    surcharge: 0,
    totalFee: 0,
  });
  const [destinations, setDestinations] = useState([]);
  const [randomDestinations, setRandomDestinations] = useState([]);
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3002/booking");
      setBookings(response.data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/rooms/${id}`);
      // Đảm bảo giá trị price được chuyển về số trước khi gắn vào priceTotal
      const productPrice = parseFloat(response.data.price) || 0; // Chuyển đổi thành số, mặc định là 0 nếu không hợp lệ

      // Nếu cần nhân với 100, thực hiện ở đây
      const normalizedPrice = productPrice * 100;

      setProduct(response.data || []);
      setPriceTotal(normalizedPrice); // Gắn giá trị sau khi đã xử lý
      console.log(normalizedPrice); // In ra giá trị đã chuyển đổi
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // const fetchServices = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3002/services');
  //     setServices(response.data || []);
  //   } catch (error) {
  //     console.error('Error fetching services:', error);
  //   }
  // };
  useEffect(() => {
    fetchProduct();
    // fetchServices();
    fetchBookings();
    fetchDestinations();
    console.log(product, services, bookings);
  }, [id]);

  const handleBookingSubmit = async (event) => {
    alert(
      "Cảm ơn quý khách đã đặt phòng, chúng tôi sẽ liên hệ lại với quý khách trong thời gian sớm nhất để xác nhận lại đơn đặt hàng!"
    );

    event.preventDefault();

    // Cập nhật newBooking với định dạng chính xác
    const bookingData = {
      bookingName: newBooking.bookingName,
      bookingEmail: newBooking.bookingEmail,
      bookingPhone: newBooking.bookingPhone,
      checkInDate: newBooking.checkInDate,
      checkOutDate: newBooking.checkOutDate,
      bookingRoomId: newBooking.bookingRoomId,
      paymentStatus: newBooking.paymentStatus,
      paymentMethod: newBooking.paymentMethod,
      surcharge: parseFloat(newBooking.surcharge.toFixed(2)), // Chuyển đổi surcharge về dạng số thực
      totalFee: parseFloat(newBooking.totalFee.toFixed(2)), // Chuyển đổi totalFee về dạng số thực
    };

    console.log(bookingData); // Ghi log dữ liệu để kiểm tra

    try {
      await axios.post("http://localhost:3002/booking", bookingData);
      fetchBookings(); // Refresh accounts after creation
      setNewBooking({
        bookingName: "",
        bookingEmail: "",
        bookingPhone: "",
        checkInDate: "",
        checkOutDate: "",
        bookingRoomId: id, // Đảm bảo bookingRoomId có giá trị hợp lệ
        paymentStatus: 0, // Giữ nguyên giá trị mặc định
        paymentMethod: 0, // Giữ nguyên giá trị mặc định
        surcharge: 0,
        totalFee: 0,
      });
      setAdultCount(1), setChildrenCount(0);
      alert("Đặt Phòng Thành công");
    } catch (error) {
      console.error("Error creating booking:", error);
      // Có thể hiển thị thông báo lỗi cho người dùng
      alert("Đã xảy ra lỗi khi đặt phòng. Vui lòng thử lại.");
    }
  };

  function changePayment(value) {
    if (value === "1") {
      window.open(
        "https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html?token=c840bd82df2c40c49506b4498c1f38cc"
      );
    }
    setNewBooking({
      ...newBooking,
      paymentMethod: parseInt(value), // Chuyển đổi giá trị thành số nguyên
    });
  }
  useEffect(() => {
    // Tính surcharge dựa trên số người lớn và trẻ em khi các giá trị thay đổi
    const surCharge = (adultCount - 1) * 100000 + childrenCount * 50000; // Đơn vị tính là VND

    // Tính tổng chi phí = giá phòng + surcharge
    const totalFee = priceTotal + surCharge;

    // Định dạng giá trị thành VND với 2 chữ số thập phân
    // Cập nhật newBooking với surcharge và tổng chi phí
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      surcharge: surCharge,
      totalFee: totalFee,
    }));
  }, [adultCount, childrenCount, priceTotal]);

  function changeNewSurcharge(code, value) {
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) return; // Đảm bảo giá trị hợp lệ

    if (code === 1) {
      setAdultCount(numericValue);
    }
    if (code === 2) {
      setChildrenCount(numericValue);
    }
  }

  const fetchDestinations = () => {
    const destinationList = [
      {
        name: "Thành phố Hồ Chí Minh",
        image: "https://example.com/ho-chi-minh.jpg",
      },
      {
        name: "Địa đạo Củ Chi",
        image: "https://example.com/cu-chi-tunnels.jpg",
      },
      {
        name: "Chợ Bến Thành",
        image: "https://example.com/ben-thanh-market.jpg",
      },
      {
        name: "Khu du lịch Đại Nam",
        image: "https://example.com/dai-nam-tourist.jpg",
      },
      {
        name: "Khu vui chơi giải trí Suối Tiên",
        image: "https://example.com/suoi-tien.jpg",
      },
      {
        name: "Dinh Độc Lập",
        image: "https://example.com/independence-palace.jpg",
      },
      {
        name: "Nhà thờ Đức Bà",
        image: "https://example.com/notre-dame-cathedral.jpg",
      },
      {
        name: "Bảo tàng Chứng tích Chiến tranh",
        image: "https://example.com/war-remnants-museum.jpg",
      },
    ];

    setDestinations(destinationList);
    setRandomDestinations(getRandomDestinations(destinationList, 4));
  };

  const getRandomDestinations = (list, count) => {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  return (
    <div>
      <Header />
      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div
                className="section-heading text-center"
                style={{ marginTop: "80px" }}
              >
                <h2>Chúng Tôi Cung Cấp Dịch Vụ Tốt Nhất</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            {product && (
              <div className="col-lg-6 mb-4">
                <div className="item">
                  <a href="#">
                    <img src={product.image} alt={product.name} />
                  </a>
                  <span className="category">{product.categoryId}</span>
                  <h6>{product.price.toLocaleString("vi-VN")}₫</h6>
                  <h4>
                    <a href="property-details.html">{product.name}</a>
                  </h4>
                  <ul>
                    <li>
                      Diện Tích: <span>{product.area}</span>
                    </li>
                    <li>
                      Vị Trí: <span>{product.location}</span>
                    </li>
                    <li>
                      Mô Tả: <span>{product.description}</span>
                    </li>
                  </ul>
                  <ul>
                    {services.map((service) => (
                      <li key={service.id}>{service.ServiceName}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Booking Form Section */}
            <div className="col-lg-4">
              <h2 className="text-center">Form Đặt Phòng</h2>
              <form onSubmit={handleBookingSubmit}>
                <div className="mb-3">
                  <label htmlFor="bookingName" className="form-label">
                    Họ Và Tên:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={newBooking.bookingName}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        bookingName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bookingEmail" className="form-label">
                    Địa Chỉ Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="bookingEmail"
                    value={newBooking.bookingEmail}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        bookingEmail: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="bookingPhone" className="form-label">
                    Số Điện Thoại Liên Hệ:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookingPhone"
                    value={newBooking.bookingPhone}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        bookingPhone: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bookingPhone" className="form-label">
                    Số lượng Người Họp:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="bookingPhone"
                    value={adultCount}
                    onChange={(e) => changeNewSurcharge(1, e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="bookingPhone" className="form-label">
                    Phụ phí:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookingPhone"
                    value={newBooking.surcharge}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bookingPhone" className="form-label">
                    Tổng phí:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookingPhone"
                    value={newBooking.totalFee}
                    required
                  />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="bookingRoomId" className="form-label">Mã Số Phòng</label> */}
                  <input
                    type="hidden"
                    className="form-control"
                    id="bookingRoomId"
                    value={newBooking.bookingRoomId}
                    onChange={(e) =>
                      setNewBooking({ ...newBooking, bookingRoomId: id })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="checkInDate" className="form-label">
                    Ngày Đặt Phòng Họp:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkInDate"
                    value={newBooking.checkInDate}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        checkInDate: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="checkOutDate" className="form-label">
                    Ngày Trả Phòng Họp:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkOutDate"
                    value={newBooking.checkOutDate}
                    onChange={(e) =>
                      setNewBooking({
                        ...newBooking,
                        checkOutDate: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="paymentMethod" className="form-label">
                    Payment Method:
                  </label>
                  <select
                    className="form-select"
                    value={newBooking.paymentMethod}
                    onChange={(e) => changePayment(e.target.value)} // Truyền giá trị vào hàm changePayment
                  >
                    <option value={0}>Offline</option>
                    <option value={1}>Online</option>
                  </select>
                </div>
                <div
                  className="form-group"
                  style={{ marginTop: "20px", textAlign: "center" }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ background: "#f35525" }}
                  >
                    Đặt Ngay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
