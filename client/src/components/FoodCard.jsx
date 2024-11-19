// import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({
  id,
  name,
  price,
  desc,
  category,
  rating,
  img,
  handleToast
}) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ml-2">
          <span style={{ fontFamily: "Arial" }}>₹</span>
          {price}
        </span>
      </div>
      <div className="h-[80px] mb-2">
        <p className="text-sm font-normal">
          {desc.slice(0, 80)}
          <b className="text-gray-600">...read more</b>
        </p>
      </div>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, quantity: 1 }));
            handleToast(name);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
