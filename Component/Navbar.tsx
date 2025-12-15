"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {["home", "shop", "contact",].map((item) => (
            <li key={item}>
              <Link href={`/${item}`}>{item.charAt(0).toUpperCase()+item.slice(1)}</Link>
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
             <ShoppingCart /><sup className="absolute -top-2 -right-1 bg-yellow-400 text-gray-800 text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">3</sup>
            </span>
          </Link>
          <p>
            <Link
              href="/login"
              className="relative hover:text-yellow-300 transition duration-300"
            >
              <span className="">
                Login
              </span>
            </Link>
          </p>

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
          {["home", "shop", "contact",].map((item) => (
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
