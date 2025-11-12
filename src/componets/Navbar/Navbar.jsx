// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const routes = [
  { label: "Home", path: "/" },
  { label: "Find Jobs", path: "/find-jobs" },
  { label: "Companies", path: "/companies" },
  { label: "Find Candidates", path: "/find-candidates" },
  { label: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // You can change this CSS variable elsewhere if you want a different navbar height.
  // Default h-16 = 64px
  const navStyle = { ["--navbar-height"]: "4rem" };

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 ${
      isActive ? "text-orange-500" : "text-gray-700"
    }`;

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm border-b"
      style={navStyle}
      role="navigation"
      aria-label="Main"
    >
      {/* top row: content of the navbar */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="flex justify-between items-center h-full">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">
              JobsPortal
            </span>
            <span className="ml-2 text-orange-500">📋</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {routes.map((r) => (
                <NavLink
                  key={r.path}
                  to={r.path}
                  end={r.path === "/"} // exact match for root
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {r.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/post-job")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:scale-105"
            >
              Post Job
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (inside nav so it flows below the navbar) */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t shadow ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 py-4">
          {routes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              end={r.path === "/"}
              className={({ isActive }) =>
                `w-full px-3 py-2 text-base font-medium transition-colors hover:text-orange-500 ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {r.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="w-full text-orange-500 hover:text-orange-600 font-medium transition-colors mt-2"
          >
            Sign In
          </button>

          <button
            onClick={() => {
              navigate("/post-job");
              setMenuOpen(false);
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 mt-2"
          >
            Post Job
          </button>
        </div>
      </div>
    </nav>
  );
}
