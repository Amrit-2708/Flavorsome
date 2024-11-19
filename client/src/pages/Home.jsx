import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.length === 0)
    {
      navigate("/login");
    }
  })
  
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
      <Footer />
    </>
  );
};

export default Home;
