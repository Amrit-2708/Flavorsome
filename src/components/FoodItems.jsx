import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`${name} added to cart`);

  const selectedCategory = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-12 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((item) =>
          selectedCategory === "All"
            ? item.name.toLowerCase().includes(search)
            : selectedCategory === item.category &&
              item.name.toLowerCase().includes(search)
        ).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            category={food.category}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
