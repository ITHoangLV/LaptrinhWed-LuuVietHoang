import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "../sidebar";
const New = () => {
  const [news, setNews] = useState([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [newNews, setNewNews] = useState({
    topic: "",
    title: 0,
    newsImage: "",
    description: "",
  });
  const [editNews, setEditNews] = useState({
    id: "",
    topic: "",
    title: 0,
    newsImage: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch news and categories from JSON Server
  const fetchNews = async () => {
    try {
      const newsResponse = await axios.get("http://localhost:3002/news");
      setNews(newsResponse.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Function to handle form submission for creating a new news
  const handleCreateNews = async () => {
    try {
      await axios.post("http://localhost:3002/news", newNews);
      fetchNews(); // Refresh news after creation
      setShowCreatePopup(false); // Close the create popup
      setNewNews({
        topic: "",
        title: 0,
        newsImage: "",
        description: "",
      }); // Clear form fields
    } catch (error) {
      console.error("Error creating news:", error);
    }
  };

  // Function to handle deletion of a news
  const handleDeleteNews = async (newsId) => {
    try {
      await axios.delete(`http://localhost:3002/news/${newsId}`);
      fetchNews(); // Refresh news after deletion
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  // Function to handle showing create popup
  const handleShowCreatePopup = () => {
    setShowCreatePopup(true);
  };

  // Function to handle showing edit popup with news data
  const handleShowEditPopup = (news) => {
    setEditNews(news);
    setShowEditPopup(true);
  };

  // Function to handle form submission for editing a news
  const handleEditNews = async () => {
    try {
      await axios.put(`http://localhost:3002/news/${editNews.id}`, editNews);
      fetchNews(); // Refresh news after edit
      setShowEditPopup(false); // Close the edit popup
      setEditNews({
        id: "",
        topic: "",
        title: 0,
        newsImage: "",
        description: "",
      }); // Clear editNews state
    } catch (error) {
      console.error("Error editing news:", error);
    }
  };
  // Render news in a table format
  const renderNews = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-md-1">ID</th>
            <th className="col-md-1">Topic</th>
            <th className="col-md-2">Title</th>
            <th className="col-md-1">NewsImage</th>
            <th className="col-md-5">Description</th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((news) => (
            <tr key={news.id}>
              <td>{news.id}</td>
              <td>{news.topic}</td>
              <td>{news.title}</td>
              <td>
                <img
                  src={news.newsImage}
                  alt={news.title}
                  style={{ width: "50px", height: "auto" }}
                />
              </td>
              <td>{news.description}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDeleteNews(news.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleShowEditPopup(news)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Render component
  return (
    <div className="position-relative bg-white d-flex p-0 dashboard-admin margin-0">
      <Sidebar />
      <div className="container-fluid pt-4 px-4 height-85">
        <h2>Tin Tức</h2>
        <button
          className="btn btn-primary mb-3"
          onClick={handleShowCreatePopup}
        >
          Thêm Tin Tức Mới
        </button>
        {renderNews()}
      </div>

      {/* Create News Popup */}
      {showCreatePopup && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{ width: "800px" }}
        >
          <div className="bg-light p-5">
            <h3 className="mb-4">Create New News</h3>
            <form onSubmit={handleCreateNews}>
              <div className="mb-3">
                <label htmlFor="topic" className="form-label">
                  Topic:
                </label>
                <select
                  className="form-control"
                  id="topic"
                  value={newNews.topic}
                  onChange={(e) =>
                    setNewNews({ ...newNews, topic: e.target.value })
                  }
                  required
                >
                  <option value="">Select Topic</option>
                  <option key="Chính trị" value="Chính trị">
                    Chính trị
                  </option>
                  <option key="Kinh tế" value="Kinh tế">
                    Kinh tế
                  </option>
                  <option key="Xã hội" value="Xã hội">
                    Xã hội
                  </option>
                  <option key="Thế giới" value="Thế giới">
                    Thế giới
                  </option>
                  <option key="Văn hóa và giải trí" value="Văn hóa và giải trí">
                    Văn hóa và giải trí
                  </option>
                  <option
                    key="Khoa học và công nghệ"
                    value="Khoa học và công nghệ"
                  >
                    Khoa học và công nghệ
                  </option>
                  <option key="Thể thao" value="Thể thao">
                    Thể thao
                  </option>
                  <option key="Giáo dục" value="Giáo dục">
                    Giáo dục
                  </option>
                  <option key="Sức khỏe" value="Sức khỏe">
                    Sức khỏe
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={newNews.title}
                  onChange={(e) =>
                    setNewNews({ ...newNews, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newsImage" className="form-label">
                  Image URL:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="newsImage"
                  value={newNews.newsImage}
                  onChange={(e) =>
                    setNewNews({ ...newNews, newsImage: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={newNews.description}
                  onChange={(e) =>
                    setNewNews({ ...newNews, description: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setShowCreatePopup(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Popup */}
      {showEditPopup && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{ width: "800px" }}
        >
          <div className="bg-light p-5">
            <h3 className="mb-4">Edit News</h3>
            <form onSubmit={handleEditNews}>
              <div className="mb-3">
                <label htmlFor="edit-categoryId" className="form-label">
                  Topic:
                </label>
                <select
                  className="form-control"
                  id="edit-topic"
                  value={editNews.topic}
                  onChange={(e) =>
                    setEditNews({
                      ...editNews,
                      topic: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Topic</option>
                  <option key="Chính trị" value="Chính trị">
                    Chính trị
                  </option>
                  <option key="Kinh tế" value="Kinh tế">
                    Kinh tế
                  </option>
                  <option key="Xã hội" value="Xã hội">
                    Xã hội
                  </option>
                  <option key="Thế giới" value="Thế giới">
                    Thế giới
                  </option>
                  <option key="Văn hóa và giải trí" value="Văn hóa và giải trí">
                    Văn hóa và giải trí
                  </option>
                  <option
                    key="Khoa học và công nghệ"
                    value="Khoa học và công nghệ"
                  >
                    Khoa học và công nghệ
                  </option>
                  <option key="Thể thao" value="Thể thao">
                    Thể thao
                  </option>
                  <option key="Giáo dục" value="Giáo dục">
                    Giáo dục
                  </option>
                  <option key="Sức khỏe" value="Sức khỏe">
                    Sức khỏe
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="edit-title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-title"
                  name="title" // Ensure 'name' attribute matches state key
                  value={editNews.title}
                  onChange={(e) =>
                    setEditNews({ ...editNews, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-newsImage" className="form-label">
                  Image URL:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-newsImage"
                  value={editNews.newsImage}
                  onChange={(e) =>
                    setEditNews({ ...editNews, newsImage: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-description"
                  value={editNews.description}
                  onChange={(e) =>
                    setEditNews({ ...editNews, description: e.target.value })
                  }
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setShowEditPopup(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default New;
