import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import Product from './room-component/product';
import Category from './roomtype-component/category';

function Dashboard() {
  const [page, setPage] = useState('product');

  return (
    <div className="position-relative bg-white d-flex p-0 dashboard-admin margin-0">
      <Sidebar setPage={setPage} />
      <div className="content">
        <Routes>
          <Route path="/admin" element={<Category />} />
          <Route path="/admin/rooms" element={<Product />} />
          <Route path="/admin/roomtypes" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
