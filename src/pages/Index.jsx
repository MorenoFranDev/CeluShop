import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import FeaturedProduct from "../components/FeaturedProduct";
import Home from "../components/Home";
import MostPurchased from "../components/MostPurchased";

export default function Index() {
  return (
    <>
    <Home />
    <FeaturedProduct />
    <MostPurchased />
    <Contact />
    <AboutUs />
    </>
  )
}
