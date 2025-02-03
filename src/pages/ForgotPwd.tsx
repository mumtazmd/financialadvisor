import React, { useState } from "react";
import "../App.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

interface FormData {
 
  email: string;
 
  
}

const ForgotPwd: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
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

  // if (!formData.firstName) errors.firstName = "First Name is required";
  if (!formData.email.includes("@")) errors.email = "Valid Email is required";
  // if (formData.password.length < 6)
    // errors.password = "Password must be at least 6 characters";
  setErrors(errors);
  return Object.keys(errors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Forgot Password Successful!");
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

          <div className="login-right forgot-pwd-wrapper">
        <h3>
          Forgot<span className="text-success"> Password</span>
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <div className="form-group mt-4 mb-2">
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

export default ForgotPwd;