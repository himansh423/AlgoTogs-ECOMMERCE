import styles from "./Product.module.css";
import { useLoaderData } from "react-router-dom";
import img1 from "../assets/tsh2.jpg";
import img2 from "../assets/blue.webp";
import img4 from "../assets/tshirtHU.webp";
import axios from "axios";

const Product = () => {
  const productRender = useLoaderData();

  return (
    <main>
      {productRender.map((item) => (
        <div key={item.id} className={styles.productContainer}>
          <div className={styles.parentContainer}>
            <div className={styles.imgContainer}>
              <p>Sale!</p>
              <img src={item.img} className={styles.img} alt={item.title} />
            </div>
            <div className={styles.detailContainer}>
              <p className={styles.slash}>Home/{item.category}/Shoes</p>
              <p className={styles.men}>{item.category}</p>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  <del>&#x20B9;{item.cuttedPrice}</del>
                  &#x20B9;{item.price}
                </p>
                <p className={styles.shipping}>+Free Shipping</p>
              </div>
              <p className={styles.description}>{item.Shortdescription}</p>
              <div className={styles.cartContainer}>
                <select className={styles.dropDown} name="QTY" id="QTY">
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
                <button className={styles.CartButton}>ADD TO CART</button>
              </div>
              <hr />
              <p className={styles.category}>Category: {item.category}</p>
            </div>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.navigation}>
              <a href="#description">Description</a>
              <a href="#review">Review</a>
            </div>
            <p className={styles.Pdesc}>Product Description</p>
            <p className={styles.description}>
              {item.longDescription}
            </p>
          </div>

          <div className={styles.imageDesc}>
            <img src={img1} alt="" className={styles.Images} />
            <img src={img2} alt="" className={styles.Images} />
            <img src={img4} alt="" className={styles.Images} />
            <div className={styles.descBox} key={`${item.id}-box1`}>
              <p>Ut enim ad minim</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p>Quis nostrud</p>
              <p>Sed do eiusmod tempor incididunt ut labore.</p>
              <p>Duis aute irure</p>
              <p>
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.descBox} key={`${item.id}-box2`}>
              <p>More about the product</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in.
              </p>
            </div>
            <img src={img4} alt="" className={styles.Images} />
          </div>
        </div>
      ))}
    </main>
  );
};

export const ProductLoader = async ({ params }) => {
  const { title } = params;
  try {
    const res = await axios.get(
      `http://localhost:8080/producthome?products=${title}`
    );
    const { product } = res.data;
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return [];
  }
};

export default Product;
