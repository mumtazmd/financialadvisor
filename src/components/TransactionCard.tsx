import React from "react";
import "../App.css";


function TransactionCard() {
  const transactions = [
    { title: "Rent Bill", date: "26/12/2024", amount: "15,000" },
    { title: "Rent Bill", date: "26/12/2024", amount: "15,000" },
    { title: "Rent Bill", date: "26/12/2024", amount: "15,000" },
    { title: "Rent Bill", date: "26/12/2024", amount: "15,000" },
    { title: "Rent Bill", date: "26/12/2024", amount: "15,000" },
    { title: "Rent Bill", date: "26/12/2024", amount: "15,000" },
  ];
  return (
    <>
    <div>
    <div className="transaction-card">
      <h3 className="transaction-title">Transactions</h3>
      <ul className="transaction-list">
        {transactions.map((txn, index) => (
          <li key={index} className="transaction-item">
            <div>
              <strong>{txn.title}</strong>
              <p className="transaction-date">{txn.date}</p>
            </div>
            <div className="transaction-amount">{txn.amount}</div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
    </>
  );
}

export default TransactionCard;