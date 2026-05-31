import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaUser
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* LOGO */}
          <div className="navbar-logo">
            <img
              src="/logo.png"
              alt="Mana Budget Store"
              className="main-logo"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="navbar-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* ACTIONS */}
          <div className="navbar-actions">

            <button className="icon-btn">
              <FaHeart />
            </button>

            <button className="icon-btn">
              <FaUser />
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`mobile-drawer ${
          menuOpen ? "drawer-open" : ""
        }`}
      >
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Categories</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Wishlist</a>
        <a href="/">Account</a>
      </div>
    </>
  );
}

export default Navbar;