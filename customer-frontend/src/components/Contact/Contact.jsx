import "./Contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">

      <span className="contact-tag">
        Contact Us
      </span>

      <h2>
        Ready To Order?
      </h2>

      <p className="contact-subtitle">
        Contact Mana Budget Store directly and
        place your order through WhatsApp or call.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />

          <h3>Call Us</h3>

          <p>+91 97037 22979</p>

          <a href="tel:+919703722979">
            Call Now
          </a>
        </div>

        <div className="contact-card">
          <FaWhatsapp className="contact-icon" />

          <h3>WhatsApp</h3>

          <p>Instant Ordering Support</p>

          <a
            href="https://wa.me/919703722979"
            target="_blank"
            rel="noreferrer"
          >
            Chat Now
          </a>
        </div>

        <div className="contact-card">
          <FaInstagram className="contact-icon" />

          <h3>Instagram</h3>

          <p>Follow Latest Products</p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Page
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <p>Rajamahendravaram</p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            View Map
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;