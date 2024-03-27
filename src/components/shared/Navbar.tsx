"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar as ZNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="absolute w-full">
      <div className="relative w-full z-10">
        <ZNavbar
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="2xl"
          shouldHideOnScroll
        >
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
          </NavbarContent>
          <NavbarContent justify="end"></NavbarContent>
        </ZNavbar>
      </div>
    </div>
  );
};

export default Navbar;
