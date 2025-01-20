import React, { useState } from "react";
import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Income from "../components/Income.tsx";
import Expenses from "../components/Expenses.tsx";
import Loans from "../components/Loans.tsx";
import Creditcards from "../components/Creditcards.tsx";
import TransactionCard from "../components/TransactionCard.tsx";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
          
       
         <Sidebar isOpen={isOpen} />
         <div className="container-fluid">

         <div className={`content ${isOpen ? "open" : "closed"} bg-white mt-4 rounded-4 mb-4`}>
            
           <div className="row g-3">
             <div className="col-lg-8">
             <div className="float-lg-start mt-1">
             <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? "✖" : "☰"}
             </button>
             </div>
                 <div className="content-header">
                     <h1>Good Morning, Rahul</h1>
                 </div>
                 <div className="row mb-3">
                 <div className="col-lg-6">
                 <Income />
                 </div>
                 <div className="col-lg-6">
                     <Expenses />
                 </div>
                 </div>
                 <div className="row">
                     <div className="col-lg-12">
                         <Loans />
                     </div>
                 </div>
             </div>
             <div className="col-lg-4">
                 <Creditcards />
                 <TransactionCard />
             </div>
         </div>
         </div>
         </div>

       
       
    </>
  );
};

export default Dashboard;
