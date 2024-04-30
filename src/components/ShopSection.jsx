import img from "../assets/backcloth.jpeg";
import styles from "./ShopSection.module.css";
import { MdAddShoppingCart } from "react-icons/md";
const ShopSection = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <div className={styles.container}>
        <div className={styles.shopCard}>
          <MdAddShoppingCart className={styles.carticon}/>
          <img src={img} className={styles.img} alt="" />
          <div className={styles.details}>
            <h5>hhh Yellow Shoes</h5>
            <p className={styles.men}>Men</p>
            <p className={styles.price}><del>150rs</del>120rs</p>
            <div className={styles.rating}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
