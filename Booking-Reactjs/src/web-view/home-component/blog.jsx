// AboutSection.jsx
import React from 'react';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';

const Blog = () => {
    return (
        <div>
        <Header />
        <div className="container-fluid">
    <hr className="m-0" />
</div>

<div className="container">
    <div className="container mt-5">
        <h1 className="mb-4">Bài Viết</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/30/29/68/hinh-nh-phong-khach-s.jpg" className="card-img-top" alt="Blog Post 1" />
                    <div className="card-body">
                        <h5 className="card-title">Cách Chọn Khách Sạn Phù Hợp Cho Chuyến Đi</h5>
                        <p className="card-text">Hướng dẫn về cách chọn khách sạn phù hợp cho kỳ nghỉ của bạn.</p>
                        <a href="/blogdetail" className="btn btn-primary btn-cus">Đọc thêm</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="https://images.unsplash.com/photo-1529260835092-8d55f6ffca42" className="card-img-top" alt="Blog Post 2" />
                    <div className="card-body">
                        <h5 className="card-title">Bí Quyết Đặt Phòng Khách Sạn Giá Tốt</h5>
                        <p className="card-text">Mẹo và bí quyết để đặt phòng khách sạn với giá tốt nhất.</p>
                        <a href="/blogdetail" className="btn btn-primary btn-cus">Đọc thêm</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="https://images.unsplash.com/photo-1576671081231-4b1e4f0d670d" className="card-img-top" alt="Blog Post 3" />
                    <div className="card-body">
                        <h5 className="card-title">Những Tiện Nghi Cần Có Trong Khách Sạn</h5>
                        <p className="card-text">Tìm hiểu về những tiện nghi quan trọng cần có trong một khách sạn tốt.</p>
                        <a href="blogdetail.html" className="btn btn-primary btn-cus">Đọc thêm</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="https://images.unsplash.com/photo-1590479770923-49df6f508125" className="card-img-top" alt="Blog Post 4" />
                    <div className="card-body">
                        <h5 className="card-title">Xu Hướng Thiết Kế Nội Thất Khách Sạn Hiện Đại</h5>
                        <p className="card-text">Khám phá các xu hướng thiết kế nội thất khách sạn hiện đại.</p>
                        <a href="blogdetail.html" className="btn btn-primary btn-cus">Đọc thêm</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="https://images.unsplash.com/photo-1587574293344-cb1a3d70d3f5" className="card-img-top" alt="Blog Post 5" />
                    <div className="card-body">
                        <h5 className="card-title">Lợi Ích Của Việc Đặt Khách Sạn Trước</h5>
                        <p className="card-text">Những lợi ích của việc đặt phòng khách sạn trước kỳ nghỉ.</p>
                        <a href="blogdetail.html" className="btn btn-primary btn-cus">Đọc thêm</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="https://images.unsplash.com/photo-1515524738708-c47218736e5f" className="card-img-top" alt="Blog Post 6" />
                    <div className="card-body">
                        <h5 className="card-title">Cách Đặt Khách Sạn Ở Nước Ngoài</h5>
                        <p className="card-text">Hướng dẫn cách đặt khách sạn khi du lịch nước ngoài.</p>
                        <a href="blogdetail.html" className="btn btn-primary btn-cus">Đọc thêm</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        <Footer />
    </div>
    
    );
};

export default Blog;