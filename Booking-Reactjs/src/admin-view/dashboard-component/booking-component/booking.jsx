import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../sidebar";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const [newBooking, setNewBooking] = useState({
    bookingName: "",
    bookingEmail: "",
    bookingPhone: "",
    checkInDate: "",
    checkOutDate: "",
    bookingRoomId: "",
    paymentStatus: 0, // 0: Chưa thanh toán, 1: Đã thanh toán
    paymentMethod: 0, // 0: Offline, 1: Online
    bookingStatus:0
  });

  const [editBooking, setEditBooking] = useState({
    id: "",
    bookingName: "",
    bookingEmail: "",
    bookingPhone: "",
    checkInDate: "",
    checkOutDate: "",
    bookingRoomId: "",
    paymentStatus: 0, // 0: Chưa thanh toán, 1: Đã thanh toán
    paymentMethod: 0, // 0: Offline, 1: Online
    bookingStatus:0
  });

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3002/booking");
      setBookings(response.data || []);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching bookings:", error);
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
      await axios.post("http://localhost:3002/booking", newBooking);
      fetchBookings(); // Refresh bookings after creation
      setShowCreatePopup(false); // Close the create popup
      setNewBooking({
        bookingName: "",
        bookingEmail: "",
        bookingPhone: "",
        checkInDate: "",
        checkOutDate: "",
        bookingRoomId: "",
        paymentStatus: 0,
        paymentMethod: 0,
      }); // Clear form fields
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:3002/booking/${bookingId}`);
      fetchBookings(); // Refresh bookings after deletion
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleShowCreatePopup = () => {
    setShowCreatePopup(true);
  };

  const handleShowEditPopup = (booking) => {
    // Chuyển đổi ngày từ định dạng ISO sang định dạng dd-mm-yyyy
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getUTCDate()).padStart(2, '0'); // Lấy ngày và thêm 0 nếu ngày < 10
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Lấy tháng (bắt đầu từ 0) và thêm 0 nếu tháng < 10
      const year = date.getUTCFullYear(); // Lấy năm
      return `${year}-${month}-${day}`; // Trả về định dạng yyyy-mm-dd
    };
  
    // Cập nhật trạng thái editBooking với các giá trị đã định dạng
    setEditBooking({
      ...booking,
      checkInDate: formatDate(booking.checkInDate),
      checkOutDate: formatDate(booking.checkOutDate),
    });
  
    setShowEditPopup(true);
  };
  const handleEditBooking = async (event) => {
    editBooking.bookingStatus = 0;
    console.log(editBooking)
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:3002/booking/${editBooking.id}`,
        editBooking
      );
      fetchBookings(); // Refresh bookings after edit
      setShowEditPopup(false); // Close the edit popup
      setEditBooking({
        id: "",
        bookingName: "",
        bookingEmail: "",
        bookingPhone: "",
        checkInDate: "",
        checkOutDate: "",
        bookingRoomId: "",
        paymentStatus: 0,
        paymentMethod: 0,
      }); // Clear editBooking state
    } catch (error) {
      console.error("Error editing booking:", error);
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
            <th>Payment Status</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.bookingName}</td>
              <td>{booking.bookingEmail}</td>
              <td>{booking.bookingPhone}</td>
              <td>{booking.bookingRoomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {booking.paymentStatus === 0
                  ? "Chưa thanh toán"
                  : "Đã thanh toán"}
              </td>
              <td>{booking.paymentMethod === 0 ? "Offline" : "Online"}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDeleteBooking(booking.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleShowEditPopup(booking)}
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
  return (
    <div className="position-relative bg-white d-flex p-0 dashboard-admin margin-0">
      <Sidebar />
      <div className="container-fluid pt-4 px-4 height-85">
        <h2>Đặt Phòng</h2>
        <button
          className="btn btn-primary mb-3"
          onClick={handleShowCreatePopup}
        >
          Thêm Đơn Đặt Phòng
        </button>
        {renderBookings()}
      </div>
      {/* Create Booking Popup */}
      {showCreatePopup && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-light p-5">
            <h3 className="mb-4">Create New Booking</h3>
            <form onSubmit={handleCreateBooking}>
              <div className="mb-3">
                <label htmlFor="bookingName" className="form-label">
                  Booking Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={newBooking.bookingName}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      bookingName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookingEmail" className="form-label">
                  Booking Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="bookingEmail"
                  value={newBooking.bookingEmail}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      bookingEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="paymentStatus" className="form-label">
                  Payment Status:
                </label>
                <select
                  className="form-select"
                  value={newBooking.paymentStatus}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      paymentStatus: parseInt(e.target.value),
                    })
                  }
                >
                  <option value={0}>Chưa thanh toán</option>
                  <option value={1}>Đã thanh toán</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">
                  Payment Method:
                </label>
                <select
                  className="form-select"
                  value={newBooking.paymentMethod}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      paymentMethod: parseInt(e.target.value),
                    })
                  }
                >
                  <option value={0}>Offline</option>
                  <option value={1}>Online</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="bookingPhone" className="form-label">
                  Booking Phone:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookingPhone"
                  value={newBooking.bookingPhone}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      bookingPhone: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bookingRoomId" className="form-label">
                  Booking Room Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookingRoomId"
                  value={newBooking.bookingRoomId}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      bookingRoomId: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">
                  Check In Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="checkInDate"
                  value={newBooking.checkInDate}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      checkInDate: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">
                  Check Out Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="checkOutDate"
                  value={newBooking.checkOutDate}
                  onChange={(e) =>
                    setNewBooking({
                      ...newBooking,
                      checkOutDate: e.target.value,
                    })
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

      {/* Edit Account Popup */}
      {showEditPopup && (
        <div className="position-fixed top-50 start-50 translate-middle" style={{width:'650px'}}>
          <div className="bg-light p-5">
            <h3 className="mb-4">Edit Booking</h3>
            <form onSubmit={handleEditBooking}>
              <div className="mb-3">
                <label htmlFor="edit-bookingName" className="form-label">
                  Booking Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-bookingName"
                  value={editBooking.bookingName}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      bookingName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-bookingEmail" className="form-label">
                  Booking Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="edit-bookingEmail"
                  value={editBooking.bookingEmail}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      bookingEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="edit-bookingPhone" className="form-label">
                  Booking Phone:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-bookingPhone"
                  value={editBooking.bookingPhone}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      bookingPhone: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bookingRoomId" className="form-label">
                  Booking Room Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-bookingRoomId"
                  value={editBooking.bookingRoomId}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      bookingRoomId: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">
                  Check In Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="edit-checkInDate"
                  value={editBooking.checkInDate}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      checkInDate: e.target.value,
                    })
                  }
       
                />
              </div>

              <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">
                  Check Out Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="edit-checkOutDate"
                  value={editBooking.checkOutDate}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      checkOutDate: e.target.value,
                    })
                  }
           
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edit-paymentStatus" className="form-label">
                  Payment Status:
                </label>
                <select
                  className="form-select"
                  id="edit-paymentStatus"
                  value={editBooking.paymentStatus}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      paymentStatus: parseInt(e.target.value),
                    })
                  }
                  required
                >
                  <option value={0}>Chưa thanh toán</option>
                  <option value={1}>Đã thanh toán</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="edit-paymentMethod" className="form-label">
                  Payment Method:
                </label>
                <select
                  className="form-select"
                  id="edit-paymentMethod"
                  value={editBooking.paymentMethod}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      paymentMethod: parseInt(e.target.value),
                    })
                  }
                  required
                >
                  <option value={0}>Offline</option>
                  <option value={1}>Online</option>
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
export default Booking;
