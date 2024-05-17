import { useDispatch, useSelector } from "react-redux";
import styles from "./CartSide.module.css";
import { RxCross2 } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { cartAction } from "../store/cart";
import axios from "axios";
import { BiRupee } from "react-icons/bi";
import { useRef, useEffect } from "react";
import { loaderAction } from "../store/loader";

const CartSide = () => {
  const { cartItem, initialCartItem, styling, total } = useSelector((store) => store.cart);
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
      <div className={styles.container} style={styling}>
        <div className={styles.cartHead}>
          <h5 className={styles.h}>Shopping Cart</h5>
          <RxCross2 className={styles.cross} onClick={handleCross} />
        </div>
        <div className={styles.itemConatiner}>
          {initialCartItem.map((item) => (
            <div key={item._id} className={styles.item}>
              <div className={styles.main}>
                <img src={item.img} alt="" />
                <div className={styles.details}>
                  <p>{item.title}</p>
                  <p>
                    <span className={styles.span}>QTY</span>
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
                    <RxCross2 /><BiRupee className={styles.rupeeSymbol}/>{item.price}
                  </p>
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
                  <p>
                    <span className={styles.span}>QTY</span>
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
                    <RxCross2 /><BiRupee className={styles.rupeeSymbol}/>{item.price}
                  </p>
                </div>
              </div>
              <RxCrossCircled className={styles.cross2} onClick={() => handleDelete(item._id)} />
            </div>
          ))}
        </div>
        <div className={styles.totalConatiner}>
          <h6>Subtotal:</h6>
          <p><BiRupee className={styles.rupeeSymbol}/>{total}</p>
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