import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img
          className=" "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <form
        className="w-4/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90 "
        action=""
      >
        <h1 className="font-semibold text-2xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 text-xs w-full bg-neutral-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 text-xs w-full bg-neutral-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 text-xs w-full bg-neutral-700 rounded-md"
        />
        <button className="p-2 mt-8 bg-red-700 w-full rounded-md">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        {isSignInFrom ? (
          <p className=" text-xs py-8 ">
            <span className="text-neutral-500">New to Netflix? </span>

            <span
              onClick={toggleSignInForm}
              className="cursor-pointer hover:underline"
            >
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className=" text-xs py-8 ">
            <span className="text-neutral-500">Already registered? </span>
            <span
              onClick={toggleSignInForm}
              className="cursor-pointer hover:underline"
            >
              Sign in Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
