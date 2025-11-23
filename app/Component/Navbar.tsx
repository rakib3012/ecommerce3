"use client"

import Link from 'next/link';
import { useState } from 'react'

 

const Navbar = ( ) => {
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
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {["home", "shop", "cart"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                
              >
                {item}
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
            
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
           

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {/* {menuOpen ? <X size={28} /> : <Menu size={28} />} */}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-emerald-700 text-center space-y-3 py-4 animate-fadeIn">
          {["home", "shop", "cart"].map((item) => (
            <li key={item}>
              <Link
              href={`/${item}`}
                onClick={() => setMenuOpen(false)}
                
                
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar