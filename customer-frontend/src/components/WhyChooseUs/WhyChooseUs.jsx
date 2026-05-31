import "./WhyChooseUs.css";

import {
  FaShieldAlt,
  FaTags,
  FaTruck,
  FaWhatsapp,
  FaStar,
  FaGift,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Quality Products",
    desc: "Carefully selected products with reliable quality.",
  },
  {
    icon: <FaTags />,
    title: "Budget Friendly",
    desc: "Best prices without compromising quality.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Quick and convenient order fulfillment.",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Ordering",
    desc: "Order directly through WhatsApp in seconds.",
  },
  {
    icon: <FaStar />,
    title: "Trusted Store",
    desc: "Serving customers with trust and satisfaction.",
  },
  {
    icon: <FaGift />,
    title: "Regular Offers",
    desc: "Exciting discounts and special deals regularly.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">

      <span className="why-tag">
        Why Customers Choose Us
      </span>

      <h2>
        Why Choose Mana Budget Store?
      </h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChooseUs;