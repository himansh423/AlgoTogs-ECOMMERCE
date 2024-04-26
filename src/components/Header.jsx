import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import logoImg from "../assets/Algo_tags_logo-r.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className={styles.optContainer}>
        <div className={styles.optContainerChild1}>
          <a href="#" className={styles.brand}>
            <img src={logoImg} />
          </a>
          <a class={styles.links} href="">
            EVERYTHING
          </a>
          <a class={styles.links} href="">
            WOMEN
          </a>
          <a class={styles.links} href="">
            MEN
          </a>
          <a class={styles.links} href="">
            ACCESSORIES
          </a>
        </div>

        <div className={styles.optContainerChild2}>
          <a  class={styles.links} href="">About</a>
          <a class={styles.links} href="">Contact Us</a>
          <a class={styles.links} href=""><FaShoppingCart/></a>
          <a class={styles.links} href=""><FaUserAlt/></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
