"use client";
import React from "react";
import {
  Navbar as ZNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { IoCartSharp, IoLogOutOutline } from "react-icons/io5";
import { useAppSelector } from "@/redux/hook";

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Dashboard", "Dashboard/All-Products", "Dashboard/Orders"];

  const email = useAppSelector((state) => state.auth.email);
  console.log(email);
  return (
    <ZNavbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="block md:hidden lg:hidden"
      />
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          Z-Store
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Avatar
          isBordered
          color="primary"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          size="md"
        />
        <h3 className="text-xs md:text-base lg:text-base font-medium">
          {email}
        </h3>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </ZNavbar>
  );
};

export default DashboardNavbar;
