import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919703722979"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;