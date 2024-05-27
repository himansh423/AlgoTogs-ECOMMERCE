import { shopCardAction } from "../store/shopCard";
import styles from "./ShopSection.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoGlobeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import axios from "axios";
import { useEffect } from "react";
import { cartAction } from "../store/cart";
import { loaderAction } from "../store/loader";
import { productEverthingAction } from "../store/productEverything";
import { ProductRenderAction } from "../store/ProductRender";
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

  const getProductHome = async () => {
    const res = await axios.get("http://localhost:8080/producthome");
    console.log(res.data);
    dispatch(loaderAction.shopSec());
    dispatch(shopCardAction.shopCardData({ data: res.data }));
  };

  const cartAdd = async (id) => {
    const ExistingItem = await axios.get(
      `http://localhost:8080/cartItem/${id}`
    );
    if (ExistingItem.data) {
      alert("already in cart");
      return;
    }

    const res = await axios.get(`http://localhost:8080/producthome/${id}`);
    const postData = {
      _id: res.data._id,
      img: res.data.img,
      title: res.data.title,
      quantity: 1,
      cuttedPrice: res.data.cuttedPrice,
      price: res.data.price,
    };

    const response = await axios.post(
      `http://localhost:8080/cartItem/`,
      postData
    );
    dispatch(cartAction.addCartItem({ data: postData }));
  };

  useEffect(() => {
    getProductHome();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Featured Products</h1>
        {shopCards.map((shopCard) => (
          <Link
          to={`/product/${shopCard.title}`}
            key={shopCard._id}
            className={styles.shopCard}
            onMouseOver={() => handleOnMouseOver(shopCard._id)}
            onMouseLeave={() => handleOnMouseLeave(shopCard._id)}
          >
            <MdAddShoppingCart
              className={styles.carticon}
              style={style[shopCard._id]}
              onClick={() => cartAdd(shopCard._id)}
            />
            <img src={shopCard.img} className={styles.img} alt="" />
            <div className={styles.details}>
              <h5>{shopCard.title}</h5>
              <p className={styles.men}>{shopCard.category}</p>
              <p className={styles.price}>
                <del>{shopCard.cuttedPrice}</del>
                {shopCard.price}
              </p>
              <div className={styles.rating}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
          </Link>
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
          <p className={styles.discount}>
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </p>
          <a href="" className={styles.shopNow}>
            SHOP NOW
          </a>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.feature}>
          <IoGlobeOutline className={styles.icon} />
          <h5>Worldwide Shipping</h5>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.feature}>
          <GiClothes className={styles.icon} />
          <h5>Best Quality</h5>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.feature}>
          <BiSolidOffer className={styles.icon} />
          <h5>Best Offers</h5>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.feature}>
          <GrSecure className={styles.icon} />
          <h5>Secure Payments</h5>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
