import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "../sidebar";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    price: 0,
    description: "",
    location: "",
    roomtypeId: 0,
  });
  const [editProduct, setEditProduct] = useState({
    id: "",
    image: "",
    price: 0,
    description: "",
    location: "",
    roomtypeId: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch products and categories from JSON Server
  const fetchProducts = async () => {
    try {
      const productResponse = await axios.get("http://localhost:3002/rooms");
      const categoryResponse = await axios.get(
        "http://localhost:3002/roomtypes"
      );
      setProducts(productResponse.data || []);
      setCategories(categoryResponse.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle form submission for creating a new product
  const handleCreateProduct = async () => {
    try {
      await axios.post("http://localhost:3002/rooms", newProduct);
      fetchProducts(); // Refresh products after creation
      setShowCreatePopup(false); // Close the create popup
      setNewProduct({
        name: "",
        image: "",
        price: 0,
        description: "",
        location: "",
        roomtypeId: "",
      }); // Clear form fields
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  // Function to handle deletion of a product
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3002/rooms/${productId}`);
      fetchProducts(); // Refresh products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Function to handle showing create popup
  const handleShowCreatePopup = () => {
    setShowCreatePopup(true);
  };

  // Function to handle showing edit popup with product data
  const handleShowEditPopup = (product) => {
    console.log(product);
    setEditProduct(product);
    setShowEditPopup(true);
  };

  // Function to handle form submission for editing a product
  // Function to handle form submission for editing a product
  const handleEditProduct = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    try {
      await axios.put(
        `http://localhost:3002/rooms/${editProduct.id}`,
        editProduct
      );
      console.log(editProduct);
      fetchProducts(); // Refresh products after edit
      setShowEditPopup(false); // Close the edit popup
      setEditProduct({
        name: "",
        id: "",
        image: "",
        price: 0,
        description: "",
        location: "",
        roomtypeId: "",
      }); // Clear editProduct state
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const getCategoryNameById = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown"; // Return category name or 'Unknown' if not found
  };
  // Render products in a table format
  const renderProducts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Location</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.description}
                  style={{ width: "50px", height: "auto" }}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.location}</td>
              <td>{getCategoryNameById(product.roomtypeId)}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleShowEditPopup(product)}
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
        <h2>Phòng</h2>
        <button
          className="btn btn-primary mb-3"
          onClick={handleShowCreatePopup}
        >
          Thêm Phòng Mới
        </button>
        {renderProducts()}
      </div>

      {/* Create Product Popup */}
      {showCreatePopup && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{ width: "800px" }}
        >
          <div className="bg-light p-5">
            <h3 className="mb-4">Create New Product</h3>
            <form onSubmit={handleCreateProduct}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image URL:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: parseInt(e.target.value),
                    })
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
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={newProduct.location}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, location: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoryId" className="form-label">
                  Category:
                </label>
                <select
                  className="form-control"
                  id="categoryId"
                  value={newProduct.categoryId}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, categoryId: e.target.value })
                  }
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
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
            <h3 className="mb-4">Edit Product</h3>
            <form onSubmit={handleEditProduct}>
              <div className="mb-3">
                <label htmlFor="edit-name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-name"
                  name="name" // Ensure 'name' attribute matches state key
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-image" className="form-label">
                  Image URL:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-image"
                  value={editProduct.image}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, image: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="edit-price"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      price: parseInt(e.target.value),
                    })
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
                  value={editProduct.description}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-location" className="form-label">
                  Location:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-location"
                  value={editProduct.location}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, location: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-roomtypeId" className="form-label">
                  Room Type:
                </label>
                <select
                  className="form-control"
                  id="edit-roomtypeId"
                  value={editProduct.roomtypeId} // Binds the selected value to roomtypeId
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      roomtypeId: parseInt(e.target.value),
                    })
                  }
                  required
                >
                  <option value="">Select Room Type</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
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

export default Product;
