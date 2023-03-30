import React from "react";
import { Link } from "react-router-dom";
import RavenLogo from "./Images/RavenLogo.png";
const Navbar = () => {
  return (
    <>
      <header className="flex justify-start items-center space-x-4 mx-40 ">
        <div className="text-3xl ">
          <h1 className="font-Quicksand flex justify-center items-center space-x-4">
            <img className="w-28 p-2 " src={RavenLogo} alt="Logo" />
          </h1>
        </div>
        <ul className="flex justify-start items-center space-x-10 w-full ">
          <Link
            to="/"
            className="font-Quicksand text-white text-xl font-bold cursor-pointer hover:text-green-600"
          >
            Home
          </Link>
          <Link className="font-Quicksand text-white text-xl font-bold cursor-pointer hover:text-green-600">
            Chats
          </Link>
          <Link
            to="/login"
            className="font-Quicksand text-white text-xl font-bold cursor-pointer hover:text-green-600"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="font-Quicksand text-white text-xl font-bold cursor-pointer hover:text-green-600"
          >
            Signup
          </Link>
          <li className="font-Quicksand text-white text-xl font-bold cursor-pointer hover:text-green-600">
            Feedback
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
