import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <section className="flex  mx-40 bg-neutral-900">
        <div className=" min-w-[50%] min-h-[100vh] flex flex-col justify-start items-start">
          <div className="flex flex-col justify-center items-start min-h-[80vh]">
            <h1 className="text-9xl text-white font-Quicksand font-bold pt-4">
              Stay in Touch
              <br />
              <span className="text-green-600">
                Raven
                <span className="text-4xl px-4 text-white">
                  Connect with the Close Ones.
                </span>
              </span>
              <p className="text-2xl font-semibold py-4">
                CONNECT WITH ONE, CONNECT WITH
                <span className="text-green-600"> THOUSANDS</span>
              </p>
            </h1>

            <ul className=" mx-4 list-disc space-y-2 font-normal font-Quicksand text-xl text-white ">
              <li>Instant Messaging for the Modern World</li>
              <li>The Ultimate Chatting Experience.</li>
              <li>Connect with People You Care About.</li>
              <li>Chat, Share and Have Fun.</li>
            </ul>

            <Link
              to="signup"
              className="transition-all my-6 hover:scale-105 text-white font-Quicksand font-semibold bg-green-700 py-2 px-8"
            >
              Join Now
            </Link>
            <Link
              to="/"
              className="transition-all hover:-translate-y-2 my-4 text-white font-Quicksand underline underline-offset-2 hover:underline-offset-8 font-semibold px-4 text-center"
            >
              More Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
