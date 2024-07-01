"use client";

import CollectedData from "@/components/dashboarUI/CollectedData";
import LocationChart from "@/components/dashboarUI/LocationChart";
import RevenueChart from "@/components/dashboarUI/RevenueChart";
import React from "react";

const DashboardPage = () => {
  return (
    <div className=" p-1 md:p-6 lg:p-12 ">
      <div className="flex gap-12 flex-col lg:flex-row w-full justify-between items-center">
        <div className="w-full">
          <RevenueChart />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <LocationChart />
        </div>
      </div>
      <CollectedData />
    </div>
  );
};

export default DashboardPage;
