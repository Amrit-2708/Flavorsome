import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();

  const [token, setToken] = useState(localStorage.getItem("user"));
  
  useEffect(() => {
    setToken(localStorage.getItem("user"));
  }, []);

  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("user");
    setToken(null);
    navigate("/login");
  }

  return (
    <nav className="flex flex-col items-center md:flex-row justify-between px-6 pb-5 border-solid border-purple-500 border-b-2 ">
      <div className="flex gap-2 mt-8 items-center justify-center">
        <img
          src="/logo.png"
          alt="logo.png"
          className=" w-12 h-12 mix-blend-multiply"
        />
        <h1
          className="text-3xl font-bold my-2"
          style={{ fontFamily: "Papyrus" }}
        >
          Flavorsome
        </h1>
      </div>
      {token && (
        <div className="flex items-center mt-8">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search for your favourite dish here..."
            autoComplete="off"
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full md:w-[30vw]"
            onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
          />
        </div>
      )}
      {token && (
        <div className="mx-5 mt-8">
          <button
            className="mx-8 h-8 px-6 font-semibold bg-black rounded-md border border-slate-200 text-white"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
