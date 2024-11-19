import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://flavorsome-server.vercel.app/signup`, { name, email, password })
      .then((result) => {
        toast.success(`${result.data.message}`, { autoClose: 2000 });
        console.log("signup wale:", result);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) =>
        toast.error(
          `${error.response.data.message}. Please use another email id`,
          { autoClose: 4000 }
        )
      );
  }

  const isFormValid = name && email && password;

  return (
    <div className="container">
      <Navbar />
      <div className="flex justify-center">
        <h1 className="text-5xl mt-8 font-serif">Sign Up!</h1>
      </div>

      <div className="bg-yellow-400 flex my-8 justify-center border-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mt-8 mb-4">
            <label className="block text-sm/6 font-medium text-gray-900">
              Name
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              type="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>

          <div className="mb-4">
            <label className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>

          <div className="mb-4">
            <label className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>

          <div className="mb-8">
            <button
              to="/successful"
              disabled={!isFormValid}
              type="submit"
              className={`block w-full h-10 px-6 font-semibold rounded-md border border-slate-200 text-white ${
                isFormValid ? "bg-black" : "bg-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="mb-8 flex justify-center">
            <p>
              Already have an account?<span className="mx-1"></span>
              <NavLink to="/login" className="text-white">
                Log In !
              </NavLink>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

//   return (
//     <div className="d-flex">
//       <div className="p-8 rouned-md">
//         <h1 className="text-5xl">Welcome, new user</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               autoComplete="off"
//               name="name"
//               className="form-control rounded-0 mx-5"
//               onChange={(e) => setName(e.target.value)}
//             ></input>
//           </div>
//           <br></br>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="xyz@gmail.com"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               onChange={(e) => setEmail(e.target.value)}
//             ></input>
//           </div>
//           <br></br>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               autoComplete="off"
//               name="password"
//               className="form-control rounded-0"
//               onChange={(e) => setPassword(e.target.value)}
//             ></input>
//           </div>
//           <br></br>
//           <button
//             to="/successful"
//             disabled={!isFormValid}
//             type="submit"
//             className="btn btn-success w-100 rounded-0"
//           >
//             Register
//           </button>
//           {/* <p>already have an account</p>
//           <Link
//             to="/login"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Login
//           </Link> */}
//         </form>
//       </div>
//     </div>
//   );
// };

export default Signup;
