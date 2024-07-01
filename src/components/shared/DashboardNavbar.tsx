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
import { IoBanOutline, IoCartSharp, IoLogOutOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/feature/authSlice";

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Dashboard", "Dashboard/All-Products", "Dashboard/Orders"];

  const email = useAppSelector((state) => state.auth.email);

  const dispatch = useAppDispatch();

  return (
    <ZNavbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="block lg:hidden"
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
          src="https://i.ibb.co/rpPdQZK/Pizza-Man.jpg"
          size="md"
        />
        <h3 className="text-xs md:text-base lg:text-base font-medium">
          {email}
        </h3>
        {email ? (
          <NavbarItem onClick={() => dispatch(logOut())}>
            <Link className="text-black" href="/login">
              Logout{" "}
              <IoBanOutline className="inline-block w-6 h-6 text-red-600" />
            </Link>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link className="text-black" href="/login">
              Login <IoLogOutOutline className="inline-block w-6 h-6 " />
            </Link>
          </NavbarItem>
        )}
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
