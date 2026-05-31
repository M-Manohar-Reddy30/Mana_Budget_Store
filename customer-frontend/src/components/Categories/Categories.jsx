import "./Categories.css";

import footwearImg from "../../assets/images/categories/footwear.jpg";
import watchesImg from "../../assets/images/categories/watches.jpg";
import fashionImg from "../../assets/images/categories/fashion.jpg";
import gadgetsImg from "../../assets/images/categories/gadgets.jpg";
import rcCarsImg from "../../assets/images/categories/rc-cars.jpg";

const categories = [
  {
    name: "Footwear",
    image: footwearImg,
  },
  {
    name: "Watches",
    image: watchesImg,
  },
  {
    name: "Fashion",
    image: fashionImg,
  },
  {
    name: "Gadgets",
    image: gadgetsImg,
  },
  {
    name: "RC Cars",
    image: rcCarsImg,
  },
];

function Categories() {
  return (
    <section className="categories-section">

      <div className="section-header">
        <p>Explore Collection</p>
        <h2>Shop By Category</h2>
      </div>

      <div className="categories-grid">

        {categories.map((category, index) => (
          <div className="category-card" key={index}>

            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">
              <h3>{category.name}</h3>
              <span>Explore →</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;