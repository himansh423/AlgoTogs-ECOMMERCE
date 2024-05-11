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
            <img src={logoImg} />
          </a>
          <Link className={styles.links} to="/store">
            EVERYTHING
          </Link>
          <a className={styles.links} href="">
            WOMEN
          </a>
          <a className={styles.links} href="">
            MEN
          </a>
          <a className={styles.links} href="">
            ACCESSORIES
          </a>
        </div>

        <div className={styles.optContainerChild2}>
          <a className={styles.links} href="">
            About
          </a>
          <a className={styles.links} href="">
            Contact Us
          </a>
          <a className={styles.links}>
            <FaShoppingCart onClick={handleCartClick}/>
          </a>
          <a className={styles.links} href="">
            <FaUserAlt />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
