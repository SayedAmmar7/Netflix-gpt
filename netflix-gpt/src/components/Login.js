import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInFrom, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInFrom) {
      // Sign Up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/124479802?s=400&u=a42e03e7b1a6cc3fc080f85f9f41c9c12aa8c5b3&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // Sign In form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    // procede with Signin/Signup
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
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90 "
      >
        <h1 className="font-semibold text-2xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 text-xs w-full bg-neutral-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 text-xs w-full bg-neutral-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 text-xs w-full bg-neutral-700 rounded-md"
        />
        <p> {errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 mt-8 bg-red-700 w-full rounded-md"
        >
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
