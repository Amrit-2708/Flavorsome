import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQuantity = cartItems.reduce(
    (totalQty, item) => (totalQty += item.quantity),
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  
  return (
    <>
      <div
        className={`fixed right-0 top-0 p-5 w-full lg:w-[20vw] h-full bg-white 
        ${activeCart ? "translate-x-0" : "translate-x-full"} 
        transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-semibold text-gray-800">My Order</span>
          <IoMdClose
            className="border-2 border-grey-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>
        {cartItems.length === 0 ? (
          <h2 className="text-center text-xl font-semibold text-gray-800 mt-2">
            Your cart is empty
          </h2>
        ) : (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                quantity={item.quantity}
              />
            );
          })
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">
            Items: {totalQuantity}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            className="bg-green-500 text-white font-bold px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
            onClick={() => navigate("/success")}
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4 hover:text-green-500 ${
          totalQuantity > 0 &&
          "animate-bounce delay-500 transition-all text-green-500"
        }`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
