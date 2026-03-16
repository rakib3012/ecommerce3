"use client";

import { Menu, MoonIcon, ShoppingCart, SunIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/reducer";
import { Avatar, Button, Drawer, DrawerContent, DrawerFooter, DrawerHeader, Switch, useDisclosure } from "@heroui/react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const cart = useSelector((state: RootState) => state.cart);
  const onThemeToggle = (isSelected: boolean) => {
    setTheme(isSelected ? "dark" : "light");
  };
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
   const [placement, setPlacement] = useState("left");

  const handleOpen = ( ) => {
     
    onOpen();
  };
 

  return (
    <nav className="bg-cyan-700  text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 🔷 Logo */}
        <Link
          href="/home"
          className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300"
        >
          RakibShop<span className="text-yellow-300">.</span>
        </Link>

        {/* 🧭 Desktop Menu */}
        <ul className="hidden md:flex gap-16 text-lg font-medium">
          {["home", "shop", "contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🛒 Cart Icon */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative hover:text-yellow-300 transition duration-300"
          >
            <span className="relative">
              <ShoppingCart />
              <sup className="absolute -top-2 -right-1 bg-yellow-400 text-gray-800 text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                <span className="font-semibold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </sup>
            </span>
          </Link>
          <p>
            <Link
              href="/login"
              className="relative hover:text-yellow-300 transition duration-300"
            >
              <span className="">Login</span>
            </Link>
          </p>

          <div>
            {mounted ? (
              <Switch
                isSelected={theme === "dark"}
                onValueChange={onThemeToggle}
                color="secondary"
                size="sm"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <SunIcon className={className} />
                  ) : (
                    <MoonIcon className={className} />
                  )
                }
              >
                {theme === "dark" ? "Dark mode" : "Light mode"}
              </Switch>
            ) : null}
          </div>

          <div className="flex gap-4 items-center">
            <Avatar
            size="sm"
            onClick={() => handleOpen()}
              isBordered
              color="default"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </div>



          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-emerald-700 text-center space-y-3 py-4 animate-fadeIn">
          {["home", "shop", "contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item}`} onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
