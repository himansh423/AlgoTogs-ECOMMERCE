import axios from "axios";
import styles from "./TextOnHero.module.css";
import { useDispatch, useSelector } from "react-redux";
import { landingPageAction } from "../store/landingPage";
import { useEffect } from "react";
import { loaderAction } from "../store/loader";

const TextOnHero = () => {
  const {text} = useSelector((store) => store.landingPage);
  const disptach = useDispatch();
  const getTxtHero = async () => {
    const res = await axios.get("http://localhost:8080/");
    disptach(loaderAction.txtHero());
    disptach(landingPageAction.textHero({data:res.data[0]}))
    console.log(res.data);
  }
  useEffect(() => {
    getTxtHero();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <p className={styles.para}>{text.para}</p>
        <p className={styles.discount}>{text.discount}</p>
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
