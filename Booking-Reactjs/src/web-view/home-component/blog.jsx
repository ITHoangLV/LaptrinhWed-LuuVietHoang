import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';

const Blog = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch news data from the API
    const fetchNews = async () => {
        try {
            const response = await axios.get("http://localhost:3002/news");
            setNews(response.data || []);
        } catch (error) {
            console.error("Error fetching news data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

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
                        {loading ? (
                            <p>Loading news...</p>
                        ) : (
                            news.map((newsItem) => (
                                <div key={newsItem.id} className="col-md-4">
                                    <div className="card mb-4">
                                        <img
                                            src={newsItem.newsImage}
                                            className="card-img-top"
                                            alt={newsItem.title}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{newsItem.title}</h5>
                                            <p className="card-text">{newsItem.description}</p>
                                            <a href="/blogdetail" className="btn btn-primary btn-cus">Đọc thêm</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
