import React from "react";
import "../App.css";


function Loans() {
  const loanData = [
    {
      title: "Total Loans",
      value: "5",
      icon: "bi-bank2",
    },
    {
      title: "Total Interest",
      value: "₹1540",
      icon: "bi-currency-rupee",
    },
    {
      title: "Quarter wise",
      value: "₹3450",
      icon: "bi-cash-stack",
    },
    {
      title: "Total Outstanding",
      value: "₹75540",
      icon: "bi-wallet2",
    },
  ];
  return (
    <>
    <div>
    <div className="loan-section card p-4 custom-bg-primary text-white rounded-3">
      <h5 className="mb-4 poppins-medium">Loans</h5>
      <div className="row">
        {loanData.map((loan, index) => (
          <div key={index} className="col-md-6 mb-5">
            <div className="loan-card p-3 bg-custom-gradient rounded-4">
              <div className="d-flex align-items-center">
                <i className={`bi ${loan.icon} loan-icon me-3`}></i>
                <div>
                  <h6 className="mb-0">{loan.title}</h6>
                  <p className="mb-0 fw-bold">{loan.value}</p>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-light float-end border-info-subtle">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Loans;