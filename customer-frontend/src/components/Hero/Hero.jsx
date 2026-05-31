import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaStar,
  FaTruck
} from "react-icons/fa";

import "./Hero.css";

import shoeImg from "../../assets/images/products/shoe.png";
import watchImg from "../../assets/images/products/watch.png";
import carImg from "../../assets/images/products/car.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <motion.p
          className="hero-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Premium Fashion & Lifestyle Store
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Premium Quality.
          <br />
          Budget Friendly.
        </motion.h1>

        <p className="hero-description">
          Discover premium footwear, watches,
          fashion, gadgets and collectibles at
          affordable prices.
        </p>

        <div className="hero-badges">
          <span>
            <FaMapMarkerAlt />
            Rajamahendravaram
          </span>

          <span>
            <FaStar />
            Trusted Local Store
          </span>

          <span>
            <FaTruck />
            WhatsApp Ordering
          </span>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Shop Now
          </button>

          <button className="secondary-btn">
            WhatsApp Order
          </button>
        </div>

      </div>

      <div className="hero-right">

        <motion.div
          className="product-card"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4
          }}
        >
          <img src={shoeImg} alt="" />
          <p>Footwear</p>
        </motion.div>

        <motion.div
          className="product-card"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5
          }}
        >
          <img src={watchImg} alt="" />
          <p>Watches</p>
        </motion.div>

        <motion.div
          className="product-card"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6
          }}
        >
          <img src={carImg} alt="" />
          <p>RC Cars</p>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;