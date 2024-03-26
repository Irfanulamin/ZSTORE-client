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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Categories",
    "Men-Clothing",
    "Flash-Sale",
    "About-Us",
    "Conatct-Us",
  ];

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
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#categories">Categories</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/men-clothing">Products</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/flash-sale">Flash Sale</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about">About us</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact">Contact us</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end"></NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href={item.toLowerCase()}
                >
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
