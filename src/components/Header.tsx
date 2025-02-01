import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";


function Header() {
  const percentage = 75;
  return (
    <>
    <div className="container-fluid">
    <div className="row row-cols-2 align-items-center">
      
      <div className="col-md-8 col-sm-12 d-flex align-items-center">
        <div className="logo d-flex align-items-center gap-2">
        <img src="../../personal-finance-10x-logo.png" className="img-fluid"/>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 d-flex justify-content-end align-items-md-center">
      
      
      <div className="col-md-5 text-end poppins-medium">
        <Link to="/upload" className="upload-btn text-decoration-none">
          Upload Document
        </Link>
      </div>

     
      <div className="col-md-1 m-2 text-end">
        <img
          src="../profile-icon.png"
          alt="Profile"
          className="rounded-circle border border-secondary img-fluid"
         
        />
      </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Header;