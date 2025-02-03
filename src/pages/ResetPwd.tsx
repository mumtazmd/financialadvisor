import React, { useState } from "react";
import "../App.css";
import { FaLock } from "react-icons/fa";

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

const ResetPwd: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors: Partial<FormData> = {};

    if (formData.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Password Reset Successful!");
      // Here you would typically send the new password to your backend
    }
  };

  return (
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
                  Reset<span className="text-success"> Password</span>
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* New Password Field */}
                  <div className="form-group mt-4 mb-2">
                    <FaLock className="input-icon" />
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.newPassword && (
                      <small className="text-danger">{errors.newPassword}</small>
                    )}
                  </div>
                  {/* Confirm Password Field */}
                  <div className="form-group mt-4 mb-2">
                    <FaLock className="input-icon" />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.confirmPassword && (
                      <small className="text-danger">
                        {errors.confirmPassword}
                      </small>
                    )}
                  </div>
                  {/* Submit Button */}
                  <button type="submit" className="btn btn-success w-75 mt-3 p-3">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPwd;