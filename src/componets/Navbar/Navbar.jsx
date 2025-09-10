import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ activeRoute, onRouteChange }) => {
  const navItems = ["Home", "Find Jobs", "Companies", "Find Candidates", "Dashboard"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">JobsPortal</span>
            <span className="ml-2 text-orange-500">📋</span>
          </div>

      
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const routeKey = item.toLowerCase().replace(" ", "-");
                return (
                  <button
                    key={item}
                    onClick={() => onRouteChange(routeKey)}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 ${
                      activeRoute === routeKey ? "text-orange-500" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

         
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors">Sign In</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:scale-105">
              Post Job
            </button>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-orange-500 focus:outline-none"
              aria-label="Open Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <div className="flex flex-col items-center space-y-2 py-4">
            {navItems.map((item) => {
              const routeKey = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => {
                    onRouteChange(routeKey);
                    setMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-base font-medium transition-colors hover:text-orange-500 ${
                    activeRoute === routeKey ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <button className="w-full text-orange-500 hover:text-orange-600 font-medium transition-colors mt-2">
              Sign In
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 mt-2">
              Post Job
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;