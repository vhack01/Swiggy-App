import CartItemCard from "./CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { clearCart } from "../store/slices/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartItems:", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    try {
      dispatch(clearCart());
    } catch (err) {
      alert("Failed to clear cart");
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          className="border-2 border-solid border-red-400 text-red-600 font-bold rounded py-1 px-2 hover:bg-red-100 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
      <ul>
        {cartItems.length !== 0 ? (
          cartItems?.map((item) => (
            <li key={item?.card?.info?.id} className="">
              <CartItemCard item={item} />
            </li>
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
      </ul>
      <CartItemCard />
    </div>
  );
};

export default Cart;
