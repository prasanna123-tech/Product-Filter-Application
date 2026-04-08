import React, { useState } from "react";  
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ title, search, setSearch, category, setCategory }) => {

  const [showPopup, setShowPopup] = useState(false);   

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
     
      <div 
        className="account-icon"
        onClick={() => setShowPopup(!showPopup)}
      >
        <FaUserCircle size={32} />
      </div>

      {showPopup && (
        <div className="profile-popup">
          <p>Welcome </p>
          <button>Login</button>
          <button>Register</button>
          <button >Logout</button>
        </div>
      )}

    </div>
  );
};

export default Navbar;