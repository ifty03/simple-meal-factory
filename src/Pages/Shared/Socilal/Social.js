import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  /* requireAuth */
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/home";

  return (
    <div>
      <div className="flex text-3xl justify-center my-5">
        <FcGoogle
          onClick={async () => {
            await signInWithGoogle();
            toast.success("user created !");
            navigate(from, { replace: true });
          }}
          className="mx-4 cursor-pointer"
        ></FcGoogle>
        <SiFacebook
          onClick={async () => {
            await signInWithFacebook();
            toast.success("user created !");
            navigate(from, { replace: true });
          }}
          className="text-blue-700 cursor-pointer"
        ></SiFacebook>
        <AiFillGithub
          onClick={async () => {
            await signInWithGithub();
            toast.success("user created !");
            navigate(from, { replace: true });
          }}
          className="mx-4 cursor-pointer"
        ></AiFillGithub>
      </div>
      <Toaster />
    </div>
  );
};

export default Social;
