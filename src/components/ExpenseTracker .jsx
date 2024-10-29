import React, { useState } from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import DataContext from "../context/DataContext";
import { useContext } from "react";

const ExpenseTracker = () => {


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <Main />
    </div>
  );
};

export default ExpenseTracker;
