import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';

const BlogDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [news, setNews] = useState(null);

  // Hàm lấy dữ liệu blog từ API
  const fetchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/news/${id}`);
      setNews(response.data); // Lưu dữ liệu blog vào state
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(); // Gọi API khi component được render
  }, [id]);

  // Nếu dữ liệu chưa được tải, hiển thị loading
  if (!news) {
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
          <h1 className="mb-4">{news.title}</h1>
          <p className="text-muted">Ngày đăng: {news.publishDate}</p>
          <img
            src={news.newsImage}
            alt={news.title}
            className="img-fluid mb-4"
          />
          <p>{news.description}</p>
          <p>{news.content}</p> {/* Nội dung chi tiết của bài blog */}
          <p>
            Nếu bạn có hình ảnh hoặc video, đừng ngần ngại chèn chúng vào để
            minh họa cho nội dung của bạn.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
