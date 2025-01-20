import React from "react";
// import "./Sidebar.css";
import { FaHome, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen }) {
    const menuItems = [
        { name: "Dashboard", icon: "bi-bar-chart-line", active: true },
        { name: "Incomes", icon: "bi-cash-stack" },
        { name: "Expenses", icon: "bi-receipt" },
        { name: "Loans", icon: "bi-piggy-bank" },
        { name: "Credit Card", icon: "bi-credit-card" },
      ];
  return (
    <div className={isOpen ? "sidebar open" : "sidebar closed"}>
      <nav>
        <ul className="poppins-light sidebar-nav">
          <li><NavLink className={({ isActive }) => `${isActive ? "active" : ""} d-flex text-white text-decoration-none`} to="/"><i className="siebar-icons dash_icon"></i> Dashboard</NavLink></li>
          <li><NavLink className={({ isActive }) => `${isActive ? "active" : ""} d-flex text-white text-decoration-none`} to="/incomes"><i className="siebar-icons income_icon"></i> Incomes</NavLink></li>
          <li><NavLink className={({ isActive }) => `${isActive ? "active" : ""} d-flex text-white text-decoration-none`} to="/income"><i className="siebar-icons expenses_icon"></i> Expenses</NavLink></li>
          <li><NavLink className={({ isActive }) => `${isActive ? "active" : ""} d-flex text-white text-decoration-none`} to="/income"><i className="siebar-icons loans_icon"></i> Loans</NavLink></li>
          <li><NavLink className={({ isActive }) => `${isActive ? "active" : ""} d-flex text-white text-decoration-none`} to="/income"><i className="siebar-icons creditcard_icon"></i> Credit Card</NavLink></li>
        </ul>
      </nav>
    </div>
    
  );
}

export default Sidebar;