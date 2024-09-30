// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    bookingName: '',
    bookingEmail: '',
    bookingPhone: '',
    checkInDate: '',
    checkOutDate: '',
    bookingRoomId: ''
  });

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3002/booking');
      setBookings(response.data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/rooms/${id}`);
      setProduct(response.data || []);
    } catch (error) {
      console.error('Error fetching product:', error);
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
    console.log(product,services,bookings)

  }, [id]);
  
  const handleBookingSubmit = async (event) => {
    alert('Cảm ơn quý khách đã đặt phòng, chúng tôi sẽ liên hệ lại với quý khách trong thời gian sớm nhất để xác nhận lại đơn đặt hàng!');
    event.preventDefault();
    try {
      await axios.post('http://localhost:3002/booking', newBooking);
      fetchBookings(); // Refresh accounts after creation
      setNewBooking({ bookingName: '', bookingEmail: '', bookingPhone:'', checkInDate:'', checkOutDate:'', bookingRoomId:'' }); // Clear form fields
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };
  
  return (
    <div>
          <Header />
        <div className="properties section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="section-heading text-center" style={{marginTop:"80px"}}>
              <h2>Chúng Tôi Cung Cấp Dịch Vụ Tốt Nhất</h2>
              <br/>
            </div>
          </div>
        </div>
        <div className="row">
        {product && (
            <div className="col-lg-6 mb-4">
              <div className="item">
                <a href="#"><img src={product.image} alt={product.name} /></a>
                <span className="category">
                  {product.categoryId} 
                </span>
                <h6>{product.price.toLocaleString('vi-VN')}₫</h6>
                <h4><a href="property-details.html">{product.name}</a></h4>
                <ul>
                  <li>Diện Tích: <span>{product.area}</span></li> 
                  <li>Vị Trí: <span>{product.location}</span></li>
                  <li>Mô Tả: <span>{product.description}</span></li>
                </ul>
                <ul>
                  {services.map(service => (
                    <li key={service.id}>{service.ServiceName}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Booking Form Section */}
          <div className="col-lg-4">
            <h2 className='text-center'>Form Đặt Chỗ</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-3">
                <label htmlFor="bookingName" className="form-label">Họ Và Tên:</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={newBooking.bookingName}
                  onChange={e => setNewBooking({ ...newBooking, bookingName: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookingEmail" className="form-label">Địa Chỉ Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="bookingEmail"
                  value={newBooking.bookingEmail}
                  onChange={e => setNewBooking({ ...newBooking, bookingEmail: e.target.value })}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="bookingPhone" className="form-label">Số Điện Thoại Liên Hệ:</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookingPhone"
                  value={newBooking.bookingPhone}
                  onChange={e => setNewBooking({ ...newBooking, bookingPhone: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bookingRoomId" className="form-label">Mã Số Phòng</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookingRoomId"
                  value={newBooking.bookingRoomId}
                  onChange={e => setNewBooking({ ...newBooking, bookingRoomId: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">Ngày Nhận Phòng:</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkInDate"
                  value={newBooking.checkInDate}
                  onChange={e => setNewBooking({ ...newBooking, checkInDate: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">Ngày Trả Phòng:</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkOutDate"
                  value={newBooking.checkOutDate}
                  onChange={e => setNewBooking({ ...newBooking, checkOutDate: e.target.value })}
                  required
                />
              </div>
              <div className="form-group" style={{ marginTop: '20px', textAlign:"center" }}>
                <button type="submit" className="btn btn-primary" style={{ background: '#f35525' }}>Đặt Ngay</button>
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
