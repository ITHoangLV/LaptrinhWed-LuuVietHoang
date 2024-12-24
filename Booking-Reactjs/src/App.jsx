import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashBoard from "./admin-view/dashboard-component/dashboard";
import "./App.css";
import Login from "./authentication/login";
import BackToTopButton from "./web-view/back-to-top.jsx";
import Event from "./web-view/event.jsx";
import Home from "./web-view/home-component/home";
import ProductDetail from "./web-view/home-component/productdetail";
import Productview from "./web-view/home-component/productview";
import RoomTypesDetail from "./web-view/home-component/roomTypeDetail.jsx";
import Meeting from "./web-view/meeting.jsx";
import RoomTypes from "./web-view/roomtypes.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/roomsview" element={<Productview />} />
          <Route path="/admin/*" element={<DashBoard />} />
          <Route path="/roomdetail/:id" element={<ProductDetail />} />
          <Route path="/roomTypesDetail/:id" element={<RoomTypesDetail />} />
          <Route path="/roomtypes" element={<RoomTypes />} />
          <Route path="/event" element={<Event />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
