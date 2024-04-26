import styles from "./HeroCard.module.css";

import { useSelector } from "react-redux";
const HeroCard = () => {
  const { cardObj } = useSelector((store) => store.cards);
  return (
    <div class={styles.container}>
      {cardObj.map((card) => <div className={styles.parentCard}>
        <img src={card.img} alt="" class={styles.card} />
        <div class={styles.info}>
          <p class={styles.para1}>{card.para1}</p>
          <p class={styles.para2}>{card.para2}</p>
          <a href="" className={styles.shopNow}>
            SHOP NOW
          </a>
        </div>
      </div>)}
      
    </div>
  );
};

export default HeroCard;
