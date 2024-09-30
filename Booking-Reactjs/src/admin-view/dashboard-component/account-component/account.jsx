import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [newAccount, setNewAccount] = useState({ userName: '', email: '', score: 0, password: '', role: 0 });
  const [editAccount, setEditAccount] = useState({ id: '', userName: '', email: '', score: 0, password: '', role: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch accounts from JSON Server
  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://localhost:3002/account');
      setAccounts(response.data || []);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Function to handle form submission for creating a new account
  const handleCreateAccount = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3002/account', newAccount);
      fetchAccounts(); // Refresh accounts after creation
      setShowCreatePopup(false); // Close the create popup
      setNewAccount({ userName: '', email: '', score: 0, password: '', role: 0 }); // Clear form fields
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  // Function to handle deletion of an account
  const handleDeleteAccount = async (accountId) => {
    try {
      await axios.delete(`http://localhost:3002/account/${accountId}`);
      fetchAccounts(); // Refresh accounts after deletion
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  // Function to handle showing create popup
  const handleShowCreatePopup = () => {
    setShowCreatePopup(true);
  };

  // Function to handle showing edit popup with account data
  const handleShowEditPopup = (account) => {
    setEditAccount(account);
    setShowEditPopup(true);
  };

  // Function to handle form submission for editing an account
  const handleEditAccount = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3002/account/${editAccount.id}`, editAccount);
      fetchAccounts(); // Refresh accounts after edit
      setShowEditPopup(false); // Close the edit popup
      setEditAccount({ id: '', userName: '', email: '', score: 0, password: '', role: 0 }); // Clear editAccount state
    } catch (error) {
      console.error('Error editing account:', error);
    }
  };

  // Render accounts in a table format
  const renderAccounts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            {/* <th>Score</th> */}
            <th>Password</th>
            {/* <th>Role</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.userName}</td>
              <td>{account.email}</td>
              {/* <td>{account.score}</td> */}
              <td>{account.password}</td>
              {/* <td>{account.role}</td> */}
              <td>
                <button className="btn btn-sm btn-danger me-2" onClick={() => handleDeleteAccount(account.id)}>Delete</button>
                <button className="btn btn-sm btn-primary" onClick={() => handleShowEditPopup(account)}>Edit</button>
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
        <h2>Tài Khoản</h2>
        <button className="btn btn-primary mb-3" onClick={handleShowCreatePopup}>Thêm Tài Khoản</button>
        {renderAccounts()}
      </div>

      {/* Create Account Popup */}
      {showCreatePopup && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-light p-5">
            <h3 className="mb-4">Create New Account</h3>
            <form onSubmit={handleCreateAccount}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={newAccount.userName}
                  onChange={e => setNewAccount({ ...newAccount, userName: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={newAccount.email}
                  onChange={e => setNewAccount({ ...newAccount, email: e.target.value })}
                  required
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="score" className="form-label">Score:</label>
                <input
                  type="number"
                  className="form-control"
                  id="score"
                  value={newAccount.score}
                  onChange={e => setNewAccount({ ...newAccount, score: Number(e.target.value) })}
                  required
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={newAccount.password}
                  onChange={e => setNewAccount({ ...newAccount, password: e.target.value })}
                  required
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="role" className="form-label">Role:</label>
                <input
                  type="number"
                  className="form-control"
                  id="role"
                  value={newAccount.role}
                  onChange={e => setNewAccount({ ...newAccount, role: Number(e.target.value) })}
                  required
                />
              </div> */}
              <button type="submit" className="btn btn-primary">Create</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowCreatePopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Account Popup */}
      {showEditPopup && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-light p-5">
            <h3 className="mb-4">Edit Account</h3>
            <form onSubmit={handleEditAccount}>
              <div className="mb-3">
                <label htmlFor="edit-userName" className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-userName"
                  value={editAccount.userName}
                  onChange={e => setEditAccount({ ...editAccount, userName: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="edit-email"
                  value={editAccount.email}
                  onChange={e => setEditAccount({ ...editAccount, email: e.target.value })}
                  required
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="edit-score" className="form-label">Score:</label>
                <input
                  type="number"
                  className="form-control"
                  id="edit-score"
                  value={editAccount.score}
                  onChange={e => setEditAccount({ ...editAccount, score: Number(e.target.value) })}
                  required
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="edit-password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="edit-password"
                  value={editAccount.password}
                  onChange={e => setEditAccount({ ...editAccount, password: e.target.value })}
                  required
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="edit-role" className="form-label">Role:</label>
                <input
                  type="number"
                  className="form-control"
                  id="edit-role"
                  value={editAccount.role}
                  onChange={e => setEditAccount({ ...editAccount, role: Number(e.target.value) })}
                  required
                />
              </div> */}
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowEditPopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;

