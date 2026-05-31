import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <WhatsAppCTA />
      <About />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Home;