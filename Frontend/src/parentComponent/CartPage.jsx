import { useSelector } from "react-redux";
import CartWithItem from "../components/CartWithItem";
import EmptyCart from "../components/EmptyCart";


const CartPage = () => {
  const {initialCartItem,cartItem} = useSelector((store) => store.cart)
  return (
    <>
    {initialCartItem.length===0 && cartItem.length === 0?<EmptyCart/>:<CartWithItem/>}
    </>
  )
}

export default CartPage;