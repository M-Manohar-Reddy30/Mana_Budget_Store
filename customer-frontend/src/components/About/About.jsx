import "./About.css";

import aboutImg from "../../assets/images/about-store.jpg";

function About() {
  return (
    <section className="about">

      <div className="about-left">
        <img
          src={aboutImg}
          alt="Mana Budget Store"
        />
      </div>

      <div className="about-right">

        <span className="about-tag">
          About Us
        </span>

        <h2>
          Your Trusted Local Store
        </h2>

        <p>
          Mana Budget Store is a trusted lifestyle
          destination in Rajamahendravaram,
          offering premium footwear, watches,
          fashion products, gadgets and RC cars
          at affordable prices.
        </p>

        <p>
          Our mission is simple — provide
          quality products that look premium
          without making customers spend a
          fortune.
        </p>

        <div className="about-stats">

          <div>
            <h3>500+</h3>
            <span>Happy Customers</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Products</span>
          </div>

          <div>
            <h3>5★</h3>
            <span>Customer Rating</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;