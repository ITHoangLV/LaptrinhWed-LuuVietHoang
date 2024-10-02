
import './App.css';
import Home from './web-view/home-component/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './authentication/login';
import DashBoard from './admin-view/dashboard-component/dashboard';
import Category from './admin-view/dashboard-component/roomtype-component/category.jsx';
import Product from './admin-view/dashboard-component/room-component/product.jsx';
import Productview from './web-view/home-component/productview';
import ProductDetail from './web-view/home-component/productdetail';
import AboutView from './web-view/home-component/aboutview';
import Blog from './web-view/home-component/blog';
import BlogDetail from './web-view/home-component/blogdetail';
import Account from './admin-view/dashboard-component/account-component/account';
import Booking from './admin-view/dashboard-component/booking-component/booking';
import News from './admin-view/dashboard-component/new-component/news';
import BackToTopButton from './web-view/back-to-top.jsx';
import Cuisine from './web-view/cuisine.jsx';
import RoomTypes from './web-view/roomtypes.jsx';
import Event from './web-view/event.jsx';
import Meeting from './web-view/meeting.jsx';
import Wedding from './web-view/wedding.jsx';

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
        <Route path="/about" element={<AboutView />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/roomtypes" element={<RoomTypes />} />
        <Route path="/event" element={<Event />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail/:id" element={<BlogDetail />} />
        
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
    
  )
}

export default App
