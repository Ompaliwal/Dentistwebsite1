import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home, Users, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
  <span className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
    Flossy
  </span>
</Link>          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-blue-500 font-medium hover:text-blue-600 transition">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
              <FileText className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Appointment button and mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden sm:flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition hover:-translate-y-0.5 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Book An Appointment</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-blue-500 font-medium px-2 py-2 rounded-lg bg-blue-50">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 px-2 py-2 rounded-lg hover:bg-gray-50">
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 px-2 py-2 rounded-lg hover:bg-gray-50">
              <FileText className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 px-2 py-2 rounded-lg hover:bg-gray-50">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-600 w-full mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>Book An Appointment</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
