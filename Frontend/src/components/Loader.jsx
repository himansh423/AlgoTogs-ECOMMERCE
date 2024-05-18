import 'bootstrap/dist/css/bootstrap.css';
import styles from "./Loader.module.css";
const LoaderC = () => {
  return (
    <>
    <div className={styles.loaderContainer}>
    <div className={`spinner-border text-primary ${styles.loader}`}  style={{height: "6rem",
          width: "6rem",}} role="status"></div>
</div>
    </>
  )
}

export default LoaderC;