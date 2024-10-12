import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';

const RoomTypesDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [roomType, setRoomType] = useState(null);

  // Hàm lấy dữ liệu RoomType từ API
  const fetchRoomType = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/roomtypes/${id}`);
      setRoomType(response.data); // Lưu dữ liệu RoomType vào state
    } catch (error) {
      console.error('Error fetching room type:', error);
    }
  };

  useEffect(() => {
    fetchRoomType(); // Gọi API khi component được render
  }, [id]);

  // Nếu dữ liệu chưa được tải, hiển thị loading
  if (!roomType) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <hr className="m-0" />
      </div>
      <div className="container">
        <div className="container mt-5">
          <h1 className="mb-4">{roomType.name}</h1>
          <p className="text-muted">Giá: {roomType.price} VND</p>
          <img
            src={roomType.image}
            alt={roomType.name}
            className="img-fluid mb-4"
          />
          <p>{roomType.description}</p>
          <p>{roomType.details}</p> {/* Nội dung chi tiết về loại phòng */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoomTypesDetail;
