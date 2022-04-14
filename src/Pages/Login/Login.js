import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(password, email);
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
          <div className="flex justify-between items-center my-4">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded py-2 px-4">
              Sign In
            </button>
            <p className="cursor-pointer text-purple-500 hover:text-purple-800 font-bold">
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
          <div className="flex text-3xl justify-center my-5">
            <FcGoogle className="mx-4 cursor-pointer"></FcGoogle>
            <SiFacebook className="text-blue-700 cursor-pointer"></SiFacebook>
            <AiFillGithub className="mx-4 cursor-pointer"></AiFillGithub>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
