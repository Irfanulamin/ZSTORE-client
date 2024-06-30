import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import ProtectedLayer from "@/util/ProtectedLayout";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedLayer>
      <DashboardNavbar />
      <div className="block md:grid lg:grid grid-cols-5">
        <Sidebar />
        <div className="col-start-2 col-end-7 h-[100%] bg-black/10">
          {children}
        </div>
      </div>
    </ProtectedLayer>
  );
};

export default DashboardLayout;
