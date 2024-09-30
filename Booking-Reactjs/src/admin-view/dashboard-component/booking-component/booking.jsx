import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../sidebar"

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [newBooking, setNewBooking] = useState({ bookingName: '', bookingEmail: '', bookingPhone:'', checkInDate:'', checkOutDate:'', bookingRoomId:''});
  const [editBooking, setEditBooking] = useState({id: '', bookingName: '', bookingEmail: '', bookingPhone:'', checkInDate:'', checkOutDate:'', bookingRoomId:''});

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3002/booking');
      setBookings(response.data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCreateBooking = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3002/booking', newBooking);
      fetchBookings(); // Refresh accounts after creation
      setShowCreatePopup(false); // Close the create popup
      setNewBooking({ bookingName: '', bookingEmail: '', bookingPhone:'', checkInDate:'', checkOutDate:'', bookingRoomId:'' }); // Clear form fields
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  // Function to handle deletion of an account
  const handleDeleteBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:3002/booking/${bookingId}`);
      fetchBookings(); // Refresh accounts after deletion
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  // Function to handle showing create popup
  const handleShowCreatePopup = () => {
    setShowCreatePopup(true);
  };

  // Function to handle showing edit popup with account data
  const handleShowEditPopup = (booking) => {
    setEditBooking(booking);
    setShowEditPopup(true);
  };

  // Function to handle form submission for editing an account
  const handleEditBooking = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3002/booking/${editBooking.id}`, editBooking);
      fetchBookings(); // Refresh accounts after edit
      setShowEditPopup(false); // Close the edit popup
      setEditBooking({  bookingName: '', bookingEmail: '', bookingPhone:'', checkInDate:'', checkOutDate:'', bookingRoomId:''  }); // Clear editAccount state
    } catch (error) {
      console.error('Error editing booking:', error);
    }
  };

  // Render accounts in a table format
  const renderBookings = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Booking Name</th>
            <th>Booking Email</th>
            <th>Booking Phone</th>
            <th>Booking Room Id</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
        {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.bookingName}</td>
              <td>{booking.bookingEmail}</td>
              <td>{booking.bookingPhone}</td>
              <td>{booking.bookingRoomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              
              <td>
                <button className="btn btn-sm btn-danger me-2" onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                <button className="btn btn-sm btn-primary" onClick={() => handleShowEditPopup(booking)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <div className="position-relative bg-white d-flex p-0 dashboard-admin margin-0">
      <Sidebar />
      <div className="container-fluid pt-4 px-4 height-85">
        <h2>Đặt Phòng</h2>
        <button className="btn btn-primary mb-3" onClick={handleShowCreatePopup}>Thêm Đơn Đặt Phòng</button>
        {renderBookings()}
      </div>
      {/* Create Booking Popup */}
      {showCreatePopup && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-light p-5">
            <h3 className="mb-4">Create New Booking</h3>
            <form onSubmit={handleCreateBooking}>
              <div className="mb-3">
                <label htmlFor="bookingName" className="form-label">Booking Name</label>
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
                <label htmlFor="bookingEmail" className="form-label">Booking Email:</label>
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
                <label htmlFor="bookingPhone" className="form-label">Booking Phone:</label>
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
                <label htmlFor="bookingRoomId" className="form-label">Booking Room Id</label>
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
                <label htmlFor="checkInDate" className="form-label">Check In Date</label>
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
                <label htmlFor="checkOutDate" className="form-label">Check Out Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkOutDate"
                  value={newBooking.checkOutDate}
                  onChange={e => setNewBooking({ ...newBooking, checkOutDate: e.target.value })}
                  required
                />
              </div>

              
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
            <h3 className="mb-4">Edit Booking</h3>
            <form onSubmit={handleEditBooking}>
              <div className="mb-3">
                <label htmlFor="edit-bookingName" className="form-label">Booking Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-bookingName"
                  value={editBooking.bookingName}
                  onChange={e => setEditBooking({ ...editBooking, bookingName: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-bookingEmail" className="form-label">Booking Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="edit-bookingEmail"
                  value={editBooking.bookingEmail}
                  onChange={e => setEditBooking({ ...editBooking, bookingEmail: e.target.value })}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="edit-bookingPhone" className="form-label">Booking Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-bookingPhone"
                  value={editBooking.bookingPhone}
                  onChange={e => setEditBooking({ ...editBooking, bookingPhone: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bookingRoomId" className="form-label">Booking Room Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-bookingRoomId"
                  value={editBooking.bookingRoomId}
                  onChange={e => setEditBooking({ ...editBooking, bookingRoomId: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">Check In Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="edit-checkInDate"
                  value={editBooking.checkInDate}
                  onChange={e => setEditBooking({ ...editBooking, checkInDate: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">Check Out Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="edit-checkOutDate"
                  value={editBooking.checkOutDate}
                  onChange={e => setEditBooking({ ...editBooking, checkOutDate: e.target.value })}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowEditPopup(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
export default Booking;