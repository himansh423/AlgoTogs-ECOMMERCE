import styles from "./HeroCard.module.css";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {cardAction} from "../store/cardAction"
import axios from "axios";
import { useEffect } from "react";
import { cardActions } from "../store/cards";
import { loaderAction } from "../store/loader";
const HeroCard = () => {
  const { cardObj } = useSelector((store) => store.cards);
  const { styling } = useSelector((store) => store.cardAction);

  const getCards = async () => {
    const res = await axios.get("http://localhost:8080/cardHome");
    dispatch(loaderAction.heroC());
    dispatch(cardActions.cardContent({ data: res.data }));
  };

 
  useEffect(() => {
    getCards();
  }, []);
  
  const dispatch = useDispatch();
  const handleOnleftClick = () => {
    dispatch(cardAction.prevClick());
  }

  const handleOnRightClick = () => {
    dispatch(cardAction.nextClick());
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <MdNavigateBefore
          onClick={handleOnleftClick}
          className={styles.navigator}
        />
        <div className={styles.slide}>
          {cardObj.map((card) => (
            <div key={card._id} style={styling} className={styles.parentCard}>
              <img src={card.img} alt="" className={styles.card} />
              <div className={styles.info}>
                <p className={styles.para1}>{card.title}</p>
                <p className={styles.para2}>{card.description}</p>
                <a href="" className={styles.shopNow}>
                  SHOP NOW
                </a>
              </div>
            </div>
          ))}
        </div>
        <MdNavigateNext
          onClick={handleOnRightClick}
          className={styles.navigator}
        />
      </div>
    </div>
  );
};

export default HeroCard;
