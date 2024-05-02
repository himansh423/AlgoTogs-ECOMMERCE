import img from "../assets/backcloth.jpeg";
import { shopCardAction } from "../store/shopCard";
import styles from "./ShopSection.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const ShopSection = () => {
  const { shopCards } = useSelector((store) => store.shopCard);
  const { style } = useSelector((store) => store.shopCard);
  const dispatch = useDispatch();
  const handleOnMouseOver = (id) => {
    dispatch(shopCardAction.stylingOver({ cardId: id }));
  };
  const handleOnMouseLeave = (id) => {
    dispatch(shopCardAction.stylingLeave({ cardId: id }));
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Featured Products</h1>
        {shopCards.map((shopCard) => (
          <div
            key={shopCard.id}
            className={styles.shopCard}
            onMouseOver={() => handleOnMouseOver(shopCard.id)}
            onMouseLeave={() => handleOnMouseLeave(shopCard.id)}
          >
            <MdAddShoppingCart
              className={styles.carticon}
              style={style[shopCard.id]}
            />
            <img src={shopCard.img} className={styles.img} alt="" />
            <div className={styles.details}>
              <h5>{shopCard.title}</h5>
              <p className={styles.men}>{shopCard.for}</p>
              <p className={styles.price}>
                <del>{shopCard.cutPrice}</del>
                {shopCard.originalPrice}
              </p>
              <div className={styles.rating}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.container2}>
        <div className={styles.image}>
          <p className={styles.limited}>Limited Time Offer</p>
          <p className={styles.edition}>Special Edition</p>
          <p className={styles.discription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quam
            repellendus voluptates quas eum, odio incidunt dolore necessitatibus
            voluptas harum sint.
          </p>
          <p className={styles.discount}>Buy This T-shirt At 20% Discount, Use Code OFF20</p>
          <a href="" className={styles.shopNow}>
            SHOP NOW
          </a>
        </div>
      </div>
    </>
  );
};

export default ShopSection;