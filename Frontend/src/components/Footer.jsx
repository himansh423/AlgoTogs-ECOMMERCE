import styles from "./Footer.module.css";
import logo from "../assets/Algo_tags_logo-r.png";
import { useRef } from "react";
import axios from "axios";
const Footer = () => {


  const input = useRef();
  const handleOnSubcribe = async () => {
    const email = input.current.value;
    const subscriberData = {
      email: email,
    }
    try {
      const res = await axios.post("http://localhost:8080/subscriber",subscriberData);
      console.log(res.data);
    }
    catch(error) {
   console.log(error);
    }
   

  }

  

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
        <div className={styles.forHim}>
          <h4>For Him</h4>
          <a href="">Men Jeans</a>
          <a href="">Men Shirts</a>
          <a href="">Men Shoes</a>
          <a href="">Men Accessories</a>
          <a href="">Men Jackets</a>
        </div>
        <div className={styles.subscribeInput}>
          <p>Subscribe</p>
          <input 
          type="text"
          placeholder="Your Email Address..."
          ref={input} />
          <button onClick={handleOnSubcribe}>Subscribe</button>
        </div>
      </div>
      <div className={styles.copyrightContainer}>
        <p>Copyright © 2024 AlgoTags. Powered by AlgoTags.</p>
      </div>
    </footer>
  );
};

export default Footer;
