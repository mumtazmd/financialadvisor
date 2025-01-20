import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Income() {
  const percentage = 75;
  return (
    <>
    <div>
    <div className="card custom-card custom-bg-primary  text-white p-4 mb-3">
      {/* Card Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h6 className="mb-0 poppins-regular fs-5">Incomes</h6>
        <Dropdown className="poppins-regular">
          <Dropdown.Toggle className="btn-outline fs-7" id="dropdown-basic">
            Net Worth
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Amount */}
      <h3 className="poppins-bold fs-2-25 text-white mb-4">₹135480</h3>

      {/* Progress Bar */}
      <div className="progress mt-3 rounded-5" style={{ height: "46px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: "60%", background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)", }}
          aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <span className="small poppins-regular">60%</span>
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Income;