import React from "react";
import { RiAdminFill } from "react-icons/ri";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex items-center gap-4">
        <RiAdminFill size={50} className="text-blue-600" />
        <span className="text-xl font-semibold text-gray-800">
          Administrator
        </span>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      </div>
      <p className="text-lg text-gray-700 mb-8">
        Explore and manage your dashboard below
      </p>
    </div>
  );
};

export default DashboardPage;
