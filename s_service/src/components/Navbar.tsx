// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Para seu negócio", path: "/para-seu-negocio" },
  { label: "Casos de sucesso", path: "/casos-de-sucesso" },
  { label: "Planos", path: "/planos" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-200/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Marca */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
          >
            Smart Service
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-purple-600 bg-gray-100"
                      : "text-gray-800 hover:text-white hover:bg-purple-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Botão Mobile */}
          <button
            aria-label="Abrir menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-gray-200/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-purple-600 bg-gray-100"
                      : "text-gray-800 hover:text-white hover:bg-purple-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
