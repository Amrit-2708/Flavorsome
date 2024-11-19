import { useEffect, useState } from "react";
import FoodData from "../data/FoodData.js";
import { setCategory } from "../redux/slices/CategorySlice.js";
import { useDispatch, useSelector } from "react-redux";

const CategoryMenu = () => {
  const [allCategories, setAllCategories] = useState(["All"]);

  const getUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setAllCategories([...allCategories, ...uniqueCategories]);
  };

  useEffect(() => {
    getUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h3 className="text-2xl font-semibold mt-8" style={{ fontFamily: "Papyrus" }}>Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {allCategories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
