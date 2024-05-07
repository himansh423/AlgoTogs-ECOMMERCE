import styles from "./Footer.module.css";
import logo from "../assets/Algo_tags_logo-r.png";
import { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { subscribeToggleAction } from "../store/subscribeToggle";
const Footer = () => {
  const { toggle,loaderToggle } = useSelector((store) => store.subscribeToggle);
  const disptach = useDispatch();
  const input = useRef();
  const loaderT = () => {
    disptach(subscribeToggleAction.styleToggle());
}
const loaderF = () => {
  disptach(subscribeToggleAction.styleToggle2());
}
  const handleOnSubcribe = async () => {
    const email = input.current.value;
    const subscriberData = {
      email: email,
    };
    loaderT();
    const checkExistingEmail = await axios.get(`http://localhost:8080/subscriber/${email}`);
    if (checkExistingEmail.data) {
      alert("Email already subscribed!");
      loaderF();
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/subscriber",
        subscriberData
      );
      console.log(res.data);
      disptach(subscribeToggleAction.toggled());
    } catch (error) {
      console.log(error);
      alert("enter valid email address");
      loaderF();
    }

    input.current.value = null;

  };

 

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
        {toggle?<div className={styles.afterSubscribe}><p >Thanks for signing up for the newsletter! We'll be in touch soon.</p></div>:<div className={styles.subscribeInput}>
          <p>Subscribe</p>
          <input type="text" placeholder="Your Email Address..." ref={input} />
          <button style={loaderToggle} onClick={handleOnSubcribe}>Subscribe</button>
        </div>}
      </div>
      <div className={styles.copyrightContainer}>
        <p>Copyright © 2024 AlgoTags. Powered by AlgoTags.</p>
      </div>
    </footer>
  );
};

export default Footer;
