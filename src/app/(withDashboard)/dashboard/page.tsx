"use client";

import CollectedData from "@/components/dashboarUI/CollectedData";
import LocationChart from "@/components/dashboarUI/LocationChart";
import RecentOrder from "@/components/dashboarUI/RecentOrder";
import RevenueChart from "@/components/dashboarUI/RevenueChart";
import React from "react";

const DashboardPage = () => {
  return (
    <div className=" p-1 md:p-6 lg:p-12 ">
      <div className="flex flex-col lg:flex-row gap-1 md:gap-6 lg:gap-12 w-full justify-between items-start lg:items-center">
        <div className="w-full lg:w-1/2">
          <RevenueChart />
        </div>
        <div className="w-full lg:w-1/2">
          <LocationChart />
        </div>
        <div className="w-full lg:w-1/2">
          <CollectedData />
        </div>
      </div>
      <div>
        <RecentOrder />
      </div>
    </div>
  );
};

export default DashboardPage;
