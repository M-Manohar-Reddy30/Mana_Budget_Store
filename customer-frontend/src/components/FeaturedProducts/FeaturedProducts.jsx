import "./FeaturedProducts.css";

import product1 from "../../assets/images/products/product1.jpg";
import product2 from "../../assets/images/products/product2.jpg";
import product3 from "../../assets/images/products/product3.jpg";
import product4 from "../../assets/images/products/product4.jpg";
import product5 from "../../assets/images/products/product5.jpg";

const products = [
  {
    image: product3,
    name: "Crocs",
    price: "₹1499",
    oldPrice: "₹1999",
    discount: "25% OFF",
  },
  {
    image: product2,
    name: "Luxury Watch",
    price: "₹999",
    oldPrice: "₹1499",
    discount: "33% OFF",
  },
  {
    image: product5,
    name: "Fashion Shirt",
    price: "₹699",
    oldPrice: "₹999",
    discount: "30% OFF",
  },
  {
    image: product4,
    name: "HeadPhone",
    price: "₹1299",
    oldPrice: "₹1799",
    discount: "28% OFF",
  },
  {
    image: product1,
    name: "RC Car",
    price: "₹2499",
    oldPrice: "₹2999",
    discount: "17% OFF",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <span className="section-tag">
        Trending Products
      </span>

      <h2>
        Best Selling Products
      </h2>

      <div className="products-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <span className="discount-badge">
              {product.discount}
            </span>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <div className="price-box">
              <span className="new-price">
                {product.price}
              </span>

              <span className="old-price">
                {product.oldPrice}
              </span>
            </div>

            <button>
              WhatsApp Order
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default FeaturedProducts;