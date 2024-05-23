import styles from "./ProductDesc.module.css"
const ProductDesc = () => {
  return (
    <>
      <div className={styles.descriptionContainer}>
        <div className={styles.navigation}>
          <a>Description</a>
          <a>Review</a>
        </div>
        <p>Product Description</p>
        <p>Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </>
  );
};

export default ProductDesc;
