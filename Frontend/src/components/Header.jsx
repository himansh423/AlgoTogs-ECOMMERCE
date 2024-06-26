import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import logoImg from "../assets/Algo_tags_logo-r.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
const handleCartClick = () => {
  dispatch(cartAction.cartClick());
  console.log("clicked");
}
  return (
    <header>
      <div className={styles.optContainer}>
        <div className={styles.optContainerChild1}>
          <a href="#" className={styles.brand}>
            <img src={logoImg} className={styles.imglogo}/>
          </a>
          <Link className={styles.links} to="/store">
            EVERYTHING
          </Link>
          <Link className={styles.links} to="/women" >
            WOMEN
          </Link>
          <Link className={styles.links} to="/men">
            MEN
          </Link>
          <Link className={styles.links} to="/accessories">
            ACCESSORIES
          </Link>
        </div>

        <div className={styles.optContainerChild2}>
          <a className={styles.links} href="">
            About
          </a>
          <Link className={styles.links} to="/contact">
            Contact Us
          </Link>
          <a className={styles.links}>
            <FaShoppingCart onClick={handleCartClick}/>
          </a>
          <Link to="/login" className={styles.links} href="">
            <FaUserAlt />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
