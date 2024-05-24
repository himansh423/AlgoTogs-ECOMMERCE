import styles from "./Product.module.css";
import img from "../assets/tshirtHU.webp";
import { BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";
const Product = () => {
  const { productRender } = useSelector((store) => store.ProductRender);
  return (
    <main>
      
        {productRender.map((item) => (
          <div className={styles.parentContainer}>
          <div className={styles.imgContainer}>
          <p>Sale!</p>
          <img src={item.img} className={styles.img} alt="" />
        </div>
        <div className={styles.detailContainer}>
          <p className={styles.slash}>Home/Men/Shoes</p>
          <p className={styles.men}>{item.category}</p>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.priceContainer}>
            <p className={styles.price}>
              <del>&#x20B9;{item.cuttedPrice}</del>
              &#x20B9;{item.price}
            </p>
            <p className={styles.shipping}>+Free Shipping</p>
          </div>
          <p className={styles.description}>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue. Sed non neque elit sed.
          </p>
          <div className={styles.cartContainer}>
            <select className={styles.dropDown} name="QTY" id="QTY">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <button className={styles.CartButton}>ADD TO CART</button>
          </div>
          <hr />
          <p className={styles.category}>Category:Men</p>
        </div>
        </div>
        ))}
        
      
    </main>
  );
};

export default Product;
