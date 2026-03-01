import React from "react";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";   // 👈 Added

const Navbar = ({ title, search, setSearch, category, setCategory }) => {
  return (
    <div className="navbar">
        
      <h2 className="nav-title">{title}</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Clothing">Clothing</option>
      </select>

      {/* 👇 Account Icon Added */}
      <div className="account-icon">
        <FaUserCircle size={32} />
      </div>

    </div>
  );
};

export default Navbar;