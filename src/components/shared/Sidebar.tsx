import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" min-h-[100vh] h-full bg-slate-800 col-start-1 col-end-2 ">
      <div className="flex flex-wrap md:flex-col lg:flex-col justify-center items-start gap-1 py-6 px-1">
        <Link
          href="/dashboard"
          className="text-white font-medium text-xs  p-2 bg-black/50 w-full rounded-md"
        >
          <span className="block md:hidden lg:hidden">Dash</span>
          <span className="hidden md:block lg:block">Dashboard</span>
        </Link>
        <Link
          href="/dashboard/all-products"
          className="text-white font-medium text-xs  p-2 bg-black/50 w-full rounded-md"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
