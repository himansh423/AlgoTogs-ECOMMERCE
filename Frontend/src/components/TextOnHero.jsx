import styles from "./TextOnHero.module.css";

const TextOnHero = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.para}>Raining Offer For Hot Summer.</p>
        <p className={styles.discount}>25% OFF on All product.</p>
        <div className={styles.buttons}>
          <a href="" className={styles.shopNow}>
            SHOP NOW
          </a>
          <a href="0" className={styles.findMore}>
            FIND MORE
          </a>
        </div>
      </div>
    </>
  );
};

export default TextOnHero;
