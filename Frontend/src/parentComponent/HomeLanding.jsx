import { useSelector } from "react-redux";
import BackImage from "../components/BackImage";
import CartSide from "../components/CartSide";
import HeroCard from "../components/HeroCard";
import ShopSection from "../components/ShopSection";
import TextOnHero from "../components/TextOnHero";
import styles from "./HomeLanding.module.css";
const HomeLanding = () => {

 
  return (
    <>
      <BackImage   />
      <TextOnHero />
      <HeroCard />
      <ShopSection />
      <CartSide />
    </>
  );
};

export default HomeLanding;
