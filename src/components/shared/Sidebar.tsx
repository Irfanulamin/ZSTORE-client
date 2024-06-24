import Link from "next/link";
import React from "react";
import { FaRoad } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className=" min-h-[100vh] h-full bg-slate-300 col-start-1 col-end-2 ">
      <div className="flex flex-wrap justify-start items-start gap-1 py-6 px-1">
        <Link
          href="/dashboard"
          className="font-medium text-xs active:border-b-2 text-black bg-white border-2 border-black border-b-4 p-2 rounded   "
        >
          <span className="block md:hidden lg:hidden">Dash</span>
          <span className="hidden md:block lg:block">
            <div className="flex justify-center items-center">
              <div>
                <p className="text-base font-semibold">Dashboard</p>
              </div>
              <MdDashboard className="w-4 h-4 " />
            </div>
          </span>
        </Link>
        <Link
          href="/dashboard/all-products"
          className=" font-medium text-xs active:border-b-2 text-black bg-white border-2 border-black border-b-4 p-2 rounded   "
        >
          <div className="flex justify-center items-center">
            <div>
              <p className="text-base font-semibold">Products</p>
            </div>
            <GiClothes className="w-4 h-4 " />
          </div>
        </Link>
        <Link
          href="/dashboard/orders"
          className=" font-medium text-xs active:border-b-2 text-black bg-white border-2 border-black border-b-4 p-2 rounded   "
        >
          <div className="flex justify-center items-center">
            <div>
              <p className="text-base font-semibold">Orders</p>
            </div>
            <FaRoad className="w-4 h-4 " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
