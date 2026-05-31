import "./Footer.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-column">

          <img
            src="/logo.png"
            alt="Mana Budget Store"
            className="footer-logo"
          />

          <p>
            Premium footwear, watches,
            gadgets and lifestyle products
            at budget-friendly prices.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>

        </div>

        {/* Categories */}

        <div className="footer-column">

          <h3>Categories</h3>

          <a href="/">Footwear</a>
          <a href="/">Watches</a>
          <a href="/">Gadgets</a>
          <a href="/">RC Cars</a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt />
            +91 97037 22979
          </p>

          <p>
            <FaMapMarkerAlt />
            Rajamahendravaram
          </p>

          <div className="footer-social">

            <a
              href="https://wa.me/919703722979"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Mana Budget Store.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;