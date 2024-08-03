import React from "react";
import { Logo_Header } from "../../assets/image";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function Aheader() {
  const { user } = useAuthContext();
  return (
    <div className="2xl:container bg-white pb-7">
      <div className="s-container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="logo">
          <img src={Logo_Header} alt="logo" className="image1 mt-10" />
        </div>
        <div className="flex justify-end items-center mt-9">
          {user ? (
            <Link
              className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer ml-auto"
              to="/profile"
            >
              My Profile
            </Link>
          ) : (
            <div className="flex space-x-4">
              <Link
                className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"
                to="/signup"
              >
                Register
              </Link>
              <Link
                className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Aheader;
