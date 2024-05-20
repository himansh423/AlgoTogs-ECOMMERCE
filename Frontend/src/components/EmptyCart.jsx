import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import { BsFillCartXFill } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <>
      <div className={styles.headContainer}>
        <h1>Cart</h1>
      </div>
      <div className={styles.empty}>
        <BsFillCartXFill className={styles.cartIcon} />
        <p>Your Cart is currently empty.</p>
        <Link to="/store" className={styles.ReturnButton}>
          Return To Shop
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
