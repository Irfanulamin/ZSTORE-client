import Link from "next/link";
import React from "react";
import { FaRoad } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="hidden md:block lg:block min-h-[100vh] h-full bg-slate-900 col-start-1 col-end-2 ">
      <div className="flex flex-col  justify-start items-start gap-1 py-6 px-1 ml-4">
        <Link href="/dashboard">
          <p className="text-base font-semibold text-blue-600">Dashboard</p>
        </Link>
        <Link href="/dashboard/all-products">
          <p className="text-base font-semibold text-blue-600">Products</p>
        </Link>
        <Link href="/dashboard/orders">
          <p className="text-base font-semibold text-blue-600">Orders</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
