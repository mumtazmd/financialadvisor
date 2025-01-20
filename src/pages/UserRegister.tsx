import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

const UserRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


 const validateForm = () => {
  let errors: Partial<FormData> = {}; // ✅ Explicitly define errors type

  if (!formData.firstName) errors.firstName = "First Name is required";
  if (!formData.lastName) errors.lastName = "Last Name is required";
  if (!formData.email.includes("@")) errors.email = "Valid Email is required";
  if (!formData.phone) errors.phone = "Phone Number is required";
  if (formData.password.length < 6)
    errors.password = "Password must be at least 6 characters";
  if (formData.password !== formData.confirmPassword)
    errors.confirmPassword = "Passwords do not match";
  // if (!formData.termsAccepted)
  //   errors.termsAccepted = "You must accept the terms and conditions";

  setErrors(errors);
  return Object.keys(errors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!");
    }
  };
  return (
    <>
    <div className="container">
      <div className="register-container mt-5 poppins-medium">
      <div className="row">
          <div className="col-lg-6">
          <div className="register-left">
            <h2>Glad to see you!</h2>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <img
              src="../../registration.png" // Replace with the actual image path
              alt="Registration"
              className="img-fluid"
            />
          </div>
          </div>
          <div className="col-lg-6">
          <div className="bg-white">

          <div className="register-right">
        <h3>
          REGISTER <span className="text-success">NOW</span>
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="form-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
          </div>

          <div className="form-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
          </div>

          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="form-group">
            <FaPhone className="input-icon" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>

          <div className="form-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className="form-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
            />
            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
          </div>

          {/* Terms & Conditions */}
          <div className="form-check">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">
              I accept the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
            </label>
            {errors.termsAccepted && <small className="text-danger">{errors.termsAccepted}</small>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-75 mt-3 p-3">
            Submit
          </button>
        </form>
      </div>


          
        </div>
          </div>
      </div>
      </div>
      
   
    </div>
    
    </>
  );
}

export default UserRegister;