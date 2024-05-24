import styles from "./ProductDesc.module.css";
import img1 from "../assets/tsh2.jpg";
import img2 from "../assets/blue.webp";
import img3 from "../assets/blue2.webp";
import img4 from "../assets/tshirtHU.webp";
const ProductDesc = () => {
  return (
    <>
      <div className={styles.descriptionContainer}>
        <div className={styles.navigation}>
          <a>Description</a>
          <a>Review</a>
        </div>
        <p className={styles.Pdesc}>Product Description</p>
        <p className={styles.description}>
          Since it’s creation lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className={styles.imageDesc}>
        <img src={img1} alt="" className={styles.Images}/>
        <img src={img2} alt="" className={styles.Images}/>
        <img src={img4} alt="" className={styles.Images}/>
        <div className={styles.descBox}>
          <p>Ut enim ad minim</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <p>Quis nostrud</p>
          <p>Sed do eiusmod tempor incididunt ut labore.</p>
          <p>Duis aute irure</p>
          <p>
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>
        <div className={styles.descBox}>
          <p>More about the product</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </p>
        </div>
        <img src={img4} alt="" className={styles.Images} />
      </div>
    </>
  );
};

export default ProductDesc;
