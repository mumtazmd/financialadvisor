import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Expenses() {
  const percentage = 75;
  return (
    <>
    <div>
    <div className="card custom-card custom-bg-primary text-white p-4" >
      {/* Card Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h6 className="poppins-regular fs-5">Expenses</h6>
        <Dropdown className="poppins-regular">
          <Dropdown.Toggle className="btn-outline fs-7" id="dropdown-basic">
            Total Expenses
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Circular Chart */}
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: 120, height: 120 }}>
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              pathColor: "linear-gradient(to right, #6a11cb, #2575fc)",
              trailColor: "#cccccc",
              strokeLinecap: "round",
            })}
          >
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>₹13552</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Expenses;