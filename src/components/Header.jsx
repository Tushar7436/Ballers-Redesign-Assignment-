import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CrownLogo } from './logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#2C1B47] py-2 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <CrownLogo className="mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-[#FFD700]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-[#FFD700]">
                About
              </Link>
            </li>
            {auth?.currentUser ? (
              <>
                <li>
                  <span className="text-white">
                    Welcome, {auth.currentUser.email}
                  </span>
                </li>
                <li>
                  <button
                    onClick={auth.logout}
                    className="text-white hover:text-[#FFD700]"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-white hover:text-[#FFD700]">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white hover:text-[#FFD700]">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2C1B47] py-2 animate-fadeIn">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-[#FFD700]" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-[#FFD700]" onClick={closeMenu}>
                About
              </Link>
            </li>
            {auth?.currentUser ? (
              <>
                <li>
                  <span className="text-white">
                    Welcome, {auth.currentUser.email}
                  </span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      auth.logout();
                      closeMenu();
                    }}
                    className="text-white hover:text-[#FFD700]"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-white hover:text-[#FFD700]" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white hover:text-[#FFD700]" onClick={closeMenu}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
