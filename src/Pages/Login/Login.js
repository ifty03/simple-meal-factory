import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../firebase.init";
import Social from "../Shared/Socilal/Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  /* requireAuth */
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/home";
  const handelLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    /* clear input feild */
    if (user) {
      e.target.password.value = "";
      e.target.email.value = "";
      navigate(from, { replace: true });
      toast.success("Successfully Login!");
    }
  };
  const handelEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("reset email send. Check your Email!");
    } else {
      toast.error("Input your Email !");
    }
  };

  return (
    <div>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <form
          onSubmit={handelLogin}
          className="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-bold text-purple-500">Login</h1>
          <label className="text-gray-700 font-bold py-2" htmlFor="email">
            Your Email
          </label>
          <input
            onBlur={handelEmailValue}
            className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
            type="email"
            name="email"
            id="1"
            required
            placeholder="your email"
          />
          <label className="text-gray-700 font-bold py-2" htmlFor="password">
            Password
          </label>
          <input
            className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="2"
            placeholder="your password"
          />
          <small className="text-red-700">{error?.message}</small>
          <div className="flex justify-between items-center my-4">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded py-2 px-4">
              Sign In
            </button>
            <p
              onClick={resetPassword}
              className="cursor-pointer text-purple-500 hover:text-purple-800 font-bold"
            >
              Forgot Password?
            </p>
          </div>
          <Link to="/signUp" className="text-purple-600">
            Create a new account
          </Link>
          <div className="flex items-center">
            <div
              className="bg-purple-700"
              style={{ height: "1px", width: "100%" }}
            ></div>
            <p className="mx-2">or</p>
            <div
              className="bg-purple-700"
              style={{ height: "1px", width: "100%" }}
            ></div>
          </div>
          <Social></Social>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Login;
