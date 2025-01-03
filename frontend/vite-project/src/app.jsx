import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Transactions from './pages/Transactions';
import Inventory from './pages/Inventory';
import './index.css';


function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4">
  <ul className="flex space-x-4">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/add-product">Add Product</Link></li>
    <li><Link to="/transactions">Transactions</Link></li>
    <li><Link to="/inventory">Inventory</Link></li>
  </ul>
</nav>
<div className="p-6">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add-product" element={<AddProduct />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/inventory" element={<Inventory />} />
  </Routes>
</div>

    </Router>
  );
}

export default App;