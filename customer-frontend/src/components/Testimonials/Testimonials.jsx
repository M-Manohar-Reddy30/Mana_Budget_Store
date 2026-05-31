import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Kumar",
    review:
      "Great quality products at affordable prices. The watch I purchased exceeded my expectations.",
  },
  {
    name: "Suresh Reddy",
    review:
      "Very friendly service and quick WhatsApp ordering. Highly recommended.",
  },
  {
    name: "Priya Sharma",
    review:
      "Loved the footwear collection. Good quality and budget friendly prices.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <span className="testimonial-tag">
        Customer Reviews
      </span>

      <h2>
        What Our Customers Say
      </h2>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (
          <div
            className="testimonial-card"
            key={index}
          >
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <h4>{item.name}</h4>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Testimonials;