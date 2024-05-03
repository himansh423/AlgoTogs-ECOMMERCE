import styles from "./Footer.module.css";
import logo from "../assets/Algo_tags_logo-r.png";
const Footer = () => {
  return (
    <footer>
      <div className={styles.offer}>
        <p>
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </p>
      </div>
      <div className={styles.mainFooter}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={styles.logoFooter} />
          <p className={styles.slogan}>The best look anytime, anywhere.</p>
        </div>
        <div className={styles.forHer}>
          <h4>For Her</h4>
          <a href="">Women Jeans</a>
          <a href="">Top and Shirts</a>
          <a href="">Women Jackets</a>
          <a href="">Heels and Flats</a>
          <a href="">Women Accessories</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
