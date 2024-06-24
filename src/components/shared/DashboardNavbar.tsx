import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  User,
} from "@nextui-org/react";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <div className="w-full">
      <Navbar position="static" className=" bg-black py-2.5">
        <NavbarBrand>
          <Link href="/" className="font-bold text-white">
            Z-Store
          </Link>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <User
              name="Admin name"
              className="text-white"
              description={"@username"}
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default DashboardNavbar;
