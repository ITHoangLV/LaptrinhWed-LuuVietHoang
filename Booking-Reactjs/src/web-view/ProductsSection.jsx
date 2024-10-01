// ProductsSection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    try {
      const productsResponse = await axios.get('http://localhost:3002/rooms');
      const categoriesResponse = await axios.get('http://localhost:3002/roomtypes');
      setProducts(productsResponse.data);
      console.log(productsResponse.data)
      setCategories(categoriesResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();

  }, []);

  // Helper function to get category name by ID
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  };
// Hàm bỏ dấu tiếng Việt
const removeVietnameseTones = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

const searchRoom = (event) => {
  const roomName = removeVietnameseTones(event.target.value.trim().toLowerCase());

  if (roomName !== '') {
    // Lọc sản phẩm theo tên phòng, mô tả, hoặc tên danh mục
    const data = products.filter(x => {
      const roomNameClean = removeVietnameseTones(x.name.toLowerCase());
      const descriptionClean = removeVietnameseTones(x.description.toLowerCase());
      const categoryNameClean = removeVietnameseTones(getCategoryName(x.roomtypeId).toLowerCase());

      return roomNameClean.includes(roomName) || 
             descriptionClean.includes(roomName) || 
             categoryNameClean.includes(roomName);
    });
    setProducts(data);
  } else {
    // Nếu không có input, load lại toàn bộ dữ liệu
    fetchData();
  }
};
  return (
    <section className="products">
         <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block" style={{
          float:"none",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          width: "100%",
          padding: "20px",
          border: "1px solid #ddd",
         }}>
            <div className="search-bar border rounded-2 px-3 border-dark-subtle">
              <form
                id="search-form"
                className="text-center d-flex align-items-center"
                action=""
                method=""
              >
                <input
                  onInput={searchRoom}
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
      <div className="container">
        <div className="wrapper-heading-home animation-tran text-center active">
          <div className="container-fluid">
            <div className="site-animation">
              <h2 style={{ color: '#cb8670' }}>Phòng đang trống</h2>
            </div>
          </div>
        </div>

        <div className="col-12 product-list">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="product-item col-3">
                <div className="img-product">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="content-product">
                  <h5>
                    <a href={`/roomdetail/${product.id}`} className="product-link">
                      {product.name}
                    </a>
                  </h5>
                  <p>Loại Phòng: {getCategoryName(product.roomtypeId)}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p>Giá Tiền: {product.price.toLocaleString('vi-VN')}₫</p>
                    <p>Vị Trí: {product.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
