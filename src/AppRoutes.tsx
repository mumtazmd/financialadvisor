import React from "react";
import { Routes, Route } from "react-router-dom";


import Expenses from "./components/Expenses.tsx";
import Creditcards from "./components/Creditcards.tsx";
import Loans from "./components/Loans.tsx";
import TransactionCard from "./components/TransactionCard.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import NotFound from "./pages/NotFound.tsx";
import Incomes from "./pages/Incomes.tsx";
import UserRegister from "./pages/UserRegister.tsx";
import Login from "./pages/Login.tsx";
import UploadDoc from "./pages/UploadDoc.tsx";
import ForgotPwd from "./pages/ForgotPwd.tsx";
import ResetPwd from "./pages/ResetPwd.tsx";
import EmailVerify from "./pages/EmailVerify.tsx";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/incomes" element={<Incomes />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/creditcards" element={<Creditcards />} />
      <Route path="/loans" element={<Loans />} />
      <Route path="/transactions" element={<TransactionCard />} />
      <Route path="/user-registration" element={<UserRegister />} />
      <Route path="/user-login" element={<Login />} />
      <Route path="/upload" element={<UploadDoc />} />
      <Route path="/forgotpwd" element={<ForgotPwd />} />
      <Route path="/resetpwd" element={<ResetPwd />} />
      <Route path="/emailverify" element={<EmailVerify />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
