"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar as ZNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { IoBanOutline, IoCartSharp, IoLogOutOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/feature/authSlice";

const Navbar = () => {
  const email = useAppSelector((state) => state.auth.email);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Categories",
    "Men-Clothing",
    "Flash-Sale",
    "About-Us",
    "Contact-Us",
    "Review",
  ];

  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  return (
    <div className="absolute w-full">
      <div className="relative w-full z-10">
        <ZNavbar
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="2xl"
          shouldHideOnScroll
        >
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit">
              Z-Store
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link className="text-black" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-black" href="/categories">
                Categories
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-black" href="/men-clothing">
                Products
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-black" href="/flash-sale">
                Flash Sale
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-black" href="/about-us">
                About us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-black" href="/contact-us">
                Contact us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-black" href="/review">
                Reviews
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
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
            <NavbarItem>
              <Link className="text-black" href="/cart">
                <IoCartSharp className="h-6 w-6 relative" />
                {cart.length !== 0 && (
                  <div className="top-2 right-4 absolute ">
                    <p className="bg-red-500 text-white text-xs px-1  rounded-full">
                      {cart.length}
                    </p>
                  </div>
                )}
              </Link>
            </NavbarItem>
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
      </div>
    </div>
  );
};

export default Navbar;
