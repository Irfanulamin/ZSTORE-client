import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar />
      <div className="grid lg:grid grid-cols-5">
        <Sidebar />
        <div className="p-12 col-start-2 col-end-7">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
