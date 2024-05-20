import styles from "./CartWithItem.module.css";

const CartWithItem = () => {
  return (
    <>
      <div className={styles.headContainer}>
        <h1>Cart</h1>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.header}>
          <p className={styles.product}>Product</p>
          <p className={styles.Quantity}>Quantity</p>
          <p className={styles.subtotal}>Subtotal</p>
        </div>
      </div>
    </>
  );
};

export default CartWithItem;
