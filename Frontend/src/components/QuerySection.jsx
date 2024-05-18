import styles from "./QuerySection.module.css";

const QuerySection = () => {
  return (
    <>
      <div className={styles.queryContainer}>
        <div className={styles.headText}>
          <p className={styles.QueryText1}>Have any queries?</p>
          <p className={styles.QueryText2}>We're here to help.</p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p className={styles.head}>Sales</p>
            <p className={styles.cardText}>
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a className={styles.info} href="">
              +91-8287015235
            </a>
          </div>
          <div className={styles.card}>
            <p className={styles.head}>Complaints</p>
            <p className={styles.cardText}>
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a className={styles.info} href="">
              1900 223 8899
            </a>
          </div>
          <div className={styles.card}>
            <p className={styles.head}>Returns</p>
            <p className={styles.cardText}>
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a className={styles.info} href="">
              returns@mail.com
            </a>
          </div>
          <div className={styles.card}>
            <p className={styles.head}>Marketing</p>
            <p className={styles.cardText}>
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a className={styles.info} href="">
              1700 444 5578
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuerySection;
