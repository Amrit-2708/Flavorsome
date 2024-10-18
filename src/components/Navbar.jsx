import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col md:flex-row justify-between mx-6 py-3 mb-6">
      <div className="flex gap-2 items-center justify-center">
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
      <div className="md:mt-0 mt-5">
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
    </nav>
  );
};

export default Navbar;
