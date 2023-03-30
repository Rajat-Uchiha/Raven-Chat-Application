import React from "react";
import { Link } from "react-router-dom";
import WhiteRaven from "./Images/WhiteRaven.png";
const Signup = () => {
  return (
    <>
      <section className=" w-full flex flex-col justify-center items-center min-h-screen">
        <form
          className=" flex-col border-4 shadow-2xl border-white z-100 px-4 py-12 w-1/4 space-y-4 "
          type="submit"
          action="submit"
        >
          <div className="w-full flex justify-center items-center ">
            <div className="w-1/4">
              <svg
                className="w-8 mx-auto invert"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
            </div>
            <div className="w-3/4">
              <input
                className="w-full border-4 border-white  text-xl font-bold px-2  py-1 font-Quicksand "
                placeholder="username"
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <div className="w-1/4">
              <svg
                className="w-8 mx-auto invert"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <div className="w-3/4">
              <input
                className="w-full border-4 border-white  text-xl font-bold px-2  py-1 font-Quicksand "
                placeholder="email"
                type="email"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <div className="w-1/4">
              <svg
                className="w-8 mx-auto invert"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
            </div>
            <div className="w-3/4">
              <input
                className="w-full border-4 border-white  text-xl font-bold px-2  py-1 font-Quicksand "
                placeholder="password"
                type="password"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center drop-shadow-xl ">
            <button className=" transition-all bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white font-bold w-full py-2 text-2xl font-Quicksand my-2 ">
              Signup
            </button>
          </div>
        </form>
        <div className="my-4">
          <ul className="flex justify-start items-center space-x-10 w-full ">
            <Link
              to="/"
              className="font-Quicksand text-xl text-white font-bold cursor-pointer hover:text-green-600 underline underline-offset-2"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="font-Quicksand text-xl text-white font-bold cursor-pointer hover:text-green-600 underline underline-offset-2"
            >
              Login
            </Link>
          </ul>
        </div>
        <div className=" flex justify-center items-center my-4">
          <img className="w-1/6" src={WhiteRaven} alt="whiteRavenpng" />
        </div>
      </section>
    </>
  );
};

export default Signup;
