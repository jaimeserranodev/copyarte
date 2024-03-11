"use client";
import { useState } from 'react';
import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" passHref>
          <span className="font-semibold text-xl cursor-pointer text-orange-500">CopyArte</span>
        </Link>
        {/* Ajusta aquí para controlar la visibilidad en rangos específicos */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-500 p-3 hover:bg-orange-500 hover:text-white rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
        {/* Menú para móviles */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-white shadow-md z-10">
            <Links />
          </div>
        )}
        {/* Menú siempre visible en pantallas md o más grandes */}
        <div className="hidden md:flex">
          <Links />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;