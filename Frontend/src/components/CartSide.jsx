import { useDispatch, useSelector } from "react-redux";
import styles from "./CartSide.module.css";
import { RxCross2 } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { cartAction } from "../store/cart";
import axios from "axios";
import { useEffect } from "react";
const CartSide = () => {
  const { cartItem,styling,initialCartItem } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleCross = () => {
    dispatch(cartAction.crossClick());
  }
  

  const alreadyInCart = async () => {
    const res = await axios.get(`http://localhost:8080/cartItem/`);
    dispatch(cartAction.alreadyAddCartItem({ data: res.data }));
  }

  useEffect(()=> {
    alreadyInCart();
  },[dispatch])
 const handleDelete = async (id) => {
  const res = await axios.delete(`http://localhost:8080/cartItem/${id}`);
  console.log(`deleted ${res.data}`);
  dispatch(cartAction.deleteCartItem({ _id: id }));
  dispatch(cartAction.alreadyAddCartItemDelete({ _id: id }));
}
  
  
  return (
    <>
      <div className={styles.container} style={styling}>
        <div className={styles.cartHead}>
          <h5 className={styles.h}>Shopping Cart</h5>
          <RxCross2 className={styles.cross}  onClick={handleCross} />
        </div>
        <div className={styles.itemConatiner}>
          {initialCartItem.map((item) => (
            <div key={item._id} className={styles.item}>
              <div className={styles.main}>
                <img src={item.img} alt="" />
                <div className={styles.details}>
                  <p>{item.title}</p>
                  <p>{item.quantity} * {item.price}</p>
                </div>
              </div>
              <RxCrossCircled className={styles.cross2} onClick={() => handleDelete(item._id)} />
            </div>
          ))}
          {cartItem.map((item) => (
            <div key={item._id} className={styles.item}>
              <div className={styles.main}>
                <img src={item.img} alt="" />
                <div className={styles.details}>
                  <p>{item.title}</p>
                  <p>{item.quantity} * {item.price}</p>
                </div>
              </div>
              <RxCrossCircled className={styles.cross2} onClick={() => handleDelete(item._id)} />
            </div>
          ))}
        </div>
        <div className={styles.totalConatiner}>
          <p>Subtotal:</p>
          <p>340rs</p>
        </div>
        <div className={styles.buttons}>
          <a href="">VIEW CART</a>
          <a href="">CHECKOUT</a>
        </div>
      </div>
    </>
  );
};

export default CartSide;
