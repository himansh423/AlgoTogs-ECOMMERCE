import { useEffect, useRef } from "react";
import styles from "./CartWithItem.module.css";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartAction } from "../store/cart";
const CartWithItem = () => {
  const { cartItem, initialCartItem, total } = useSelector(
    (store) => store.cart
  );
  const selectInputRef = useRef();
  const dispatch = useDispatch();

  const handleCross = () => {
    dispatch(cartAction.crossClick());
  };

  const alreadyInCart = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/cartItem/`);
      dispatch(loaderAction.cartside());
      dispatch(cartAction.alreadyAddCartItem({ data: res.data }));
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    alreadyInCart();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/cartItem/${id}`);
      console.log(`deleted ${res.data}`);
      dispatch(cartAction.deleteCartItem({ _id: id }));
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const handleQuantityUpdate = async (id, event) => {
    const qty = event.target.value;
    try {
      const res = await axios.patch(`http://localhost:8080/cartItem/${id}`, {
        quantity: qty,
      });
      console.log(res.data);

      dispatch(cartAction.updateCartItemQuantity({ _id: id, quantity: qty }));
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  return (
    <>
      <div className={styles.headContainer}>
        <h1>Cart</h1>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.header}>
          <p className={styles.product}>Product</p>
          <p className={styles.price}>Price</p>
          <p className={styles.Quantity}>Quantity</p>
          <p className={styles.subtotal}>Subtotal</p>
        </div>
        <div className={styles.itemContainer}>
          {initialCartItem.map((item) => (
            <div className={styles.item}>
              <div className={styles.cit}>
                <RxCrossCircled
                  className={styles.cross}
                  onClick={() => handleDelete(item._id)}
                />
                <img src={item.img} alt="" />
                <p className={styles.title}>{item.title}</p>
              </div>
              <div className={styles.pqs}>
                <p className={styles.priceItem}>{item.price}</p>
                <select
                  ref={selectInputRef}
                  className={styles.dropdown}
                  onChange={(event) => handleQuantityUpdate(item._id, event)}
                  value={item.quantity}
                  name="QTY"
                  id="QTY"
                >
                  {[...Array(10).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>{" "}
                <p className={styles.subtotalItem}>84</p>
              </div>
            </div>
          ))}
          {cartItem.map((item) => (
            <div className={styles.item}>
              <div className={styles.cit}>
                <RxCrossCircled
                  className={styles.cross}
                  onClick={() => handleDelete(item._id)}
                />
                <img src={item.img} alt="" />
                <p className={styles.title}>{item.title}</p>
              </div>
              <div className={styles.pqs}>
                <p className={styles.priceItem}>{item.price}</p>
                <select
                  ref={selectInputRef}
                  className={styles.dropdown}
                  onChange={(event) => handleQuantityUpdate(item._id, event)}
                  value={item.quantity}
                  name="QTY"
                  id="QTY"
                >
                  {[...Array(10).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>{" "}
                <p className={styles.subtotalItem}>84</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartWithItem;
