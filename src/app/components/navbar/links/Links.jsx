// Links.jsx
"use client";
import { useState } from "react";
import NavLink from "./navLink/navLink"; // Asegúrate de que este componente esté adecuadamente adaptado a Tailwind CSS

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  // Puedes agregar más enlaces aquí
];

// Ahora Links recibe setIsOpen para poder modificar el estado de isOpen en Navbar
const Links = ({ setIsOpen }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    // Aquí tu lógica para manejar el cierre de sesión
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center">
      {links.map((link) => (
        // Actualiza NavLink para que acepte y maneje onClick, cerrando el menú al seleccionar un enlace
        <NavLink item={link} key={link.title} onClick={() => setIsOpen(false)} />
      ))}
      {/* Aquí tu lógica para el botón de Logout o Login */}
    </div>
  );
};

export default Links;