import "./WhatsAppCTA.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppCTA() {
  return (
    <section className="whatsapp-cta">

      <div className="cta-content">

        <span className="cta-tag">
          Ready To Shop?
        </span>

        <h2>
          Order Directly On WhatsApp
        </h2>

        <p>
          Browse our latest collection of footwear,
          watches, fashion items, gadgets and RC cars.
          Get quick support and place your order instantly.
        </p>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          <FaWhatsapp />
          Chat On WhatsApp
        </a>

      </div>

    </section>
  );
}

export default WhatsAppCTA;