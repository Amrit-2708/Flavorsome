import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <h2 className="text-3xl font-bold text-red-500">
        No such page found...☹️
      </h2>
      <p className="mt-4 text-blue-700 underline">
        <Link to="/">Go to Home page</Link>
      </p>
    </div>
  );
};

export default Error;
