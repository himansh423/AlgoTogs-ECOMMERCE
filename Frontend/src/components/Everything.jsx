import styles from "./Everything.module.css";
import { GrNext } from "react-icons/gr";
const Everything = () => {
  return (
    <main className={styles.parentConatiner}>
      <div className={styles.container}>
        <div className={styles.filter}>
           <input placeholder="Search Products.."className={styles.searchInput}/>
           <GrNext />

           <p>Filter by Price</p>
           <span>20rs</span>
           <input type="range"
                min="20"
                max="240"
                value="20"  
                />
                <span>250rs</span>
        </div>
        <div className={styles.shopContainer}>

        </div>
      </div>
    </main>
  );
};

export default Everything;
