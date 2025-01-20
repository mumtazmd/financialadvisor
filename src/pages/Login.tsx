import React, { useState } from "react";
import "../App.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

interface FormData {
  firstName: string;
  email: string;
  password: string;
  
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    password: "",
    
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
  if (!formData.email.includes("@")) errors.email = "Valid Email is required";
  if (formData.password.length < 6)
    errors.password = "Password must be at least 6 characters";
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
      <div className="login-container mt-5 poppins-medium">
      <div className="row">
          <div className="col-lg-6">
          <div className="login-left">
            <h2>Welcome Back!</h2>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            <img
              src="../../login-img.png" // Replace with the actual image path
              alt="Login"
              className="img-fluid"
            />
          </div>
          </div>
          <div className="col-lg-6">
          <div className="bg-white">

          <div className="login-right">
        <h3>
          Log<span className="text-success">IN</span>
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
          <div className="form-group text-end">
            <a href="#" className="text-decoration-none">Forgot password</a>
          </div>


          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-75 mt-3 p-3">
            Submit
          </button>
        </form>
        <div className="social-login">
  <div className="separator">
    <span>or Sign in with</span>
  </div>
  <div className="social-icons">
    <a href="#"><img src="../../fb.png" className="img-fluid" alt="Facebook" /></a>
    <a href="#"><img src="../../insta.png" className="img-fluid" alt="Instagram" /></a>
    <a href="#"><img src="../../tw.png" className="img-fluid" alt="Twitter" /></a>
    <a href="#"><img src="../../wtsup.png" className="img-fluid" alt="WhatsApp" /></a>
  </div>
</div>

      </div>


          
        </div>
          </div>
      </div>
      </div>
      
   
    </div>
    
    </>
  );
}

export default Login;