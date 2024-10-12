import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '', image: '' }); // Thêm image
  const [editCategory, setEditCategory] = useState({ id: '', name: '', description: '', image: '' }); // Thêm image
  const [loading, setLoading] = useState(true);

  // Fetch categories from JSON Server
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3002/roomtypes');
      setCategories(response.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to handle form submission for creating a new category
  const handleCreateCategory = async (e) => {
    e.preventDefault(); // Ngăn trang reload
    try {
      await axios.post('http://localhost:3002/roomtypes', newCategory);
      fetchCategories(); // Refresh categories after creation
      setShowCreatePopup(false); // Close the create popup
      setNewCategory({ name: '', description: '', image: '' }); // Clear form fields
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  // Function to handle deletion of a category
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:3002/roomtypes/${categoryId}`);
      fetchCategories(); // Refresh categories after deletion
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Function to handle showing create popup
  const handleShowCreatePopup = () => {
    setShowCreatePopup(true);
  };

  // Function to handle showing edit popup with category data
  const handleShowEditPopup = (category) => {
    setEditCategory(category);
    setShowEditPopup(true);
  };

  // Function to handle form submission for editing a category
  const handleEditCategory = async (e) => {
    e.preventDefault(); // Ngăn trang reload
    try {
      await axios.put(`http://localhost:3002/roomtypes/${editCategory.id}`, editCategory);
      fetchCategories(); // Refresh categories after edit
      setShowEditPopup(false); // Close the edit popup
      setEditCategory({ id: '', name: '', description: '', image: '' }); // Clear editCategory state
    } catch (error) {
      console.error('Error editing category:', error);
    }
  };

  // Render categories in a table format
  const renderCategories = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td><img src={category.image} alt="" width={100} /></td> {/* Hiển thị ảnh */}
              <td>
                <button className="btn btn-sm btn-danger me-2" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                <button className="btn btn-sm btn-primary" onClick={() => handleShowEditPopup(category)}>Edit</button>
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
      <div className="container-fluid pt-4 px-4 height-85">
        <h2>Loại Phòng</h2>
        <button className="btn btn-primary mb-3" onClick={handleShowCreatePopup}>Thêm Loại Mới</button>
        {renderCategories()}
      </div>

      {/* Create Category Popup */}
      {showCreatePopup && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-light p-5">
            <h3 className="mb-4">Create New Category</h3>
            <form onSubmit={handleCreateCategory}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={newCategory.name}
                  onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={newCategory.description}
                  onChange={e => setNewCategory({ ...newCategory, description: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL:</label> {/* Thêm trường image */}
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  value={newCategory.image}
                  onChange={e => setNewCategory({ ...newCategory, image: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">Create</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowCreatePopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Popup */}
      {showEditPopup && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-light p-5">
            <h3 className="mb-4">Edit Category</h3>
            <form onSubmit={handleEditCategory}>
              <div className="mb-3">
                <label htmlFor="edit-name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-name"
                  value={editCategory.name}
                  onChange={e => setEditCategory({ ...editCategory, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-description" className="form-label">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-description"
                  value={editCategory.description}
                  onChange={e => setEditCategory({ ...editCategory, description: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-image" className="form-label">Image URL:</label> {/* Thêm trường image */}
                <input
                  type="text"
                  className="form-control"
                  id="edit-image"
                  value={editCategory.image}
                  onChange={e => setEditCategory({ ...editCategory, image: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowEditPopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
