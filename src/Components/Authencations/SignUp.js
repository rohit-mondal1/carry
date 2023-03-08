import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup ,loginGoogle} = useContext(AuthContext);

  const handleAddProduct = (data) => {
    const name = data.username;
    const email = data.email;
    const password = data.password;
    const type = data.type;
    const items = {
      name,
      email,
      type,
    };
    signup(email, password)
      .then((res) => {
        const user = res.user;
        if (user.uid) {
          fetch("https://12-sarver-rahul-sarker18.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(items),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.acknowledged) {
                navigate(from, { replace: true });
                return toast.success("success sign up !!");
              }
            });
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  const googleHandel = () => {
    loginGoogle()
      .then((res) => {
        const user = res.user;

        const { email, displayName } = user;
        const items = {
          name: displayName,
          email,
          type: "Buyer",
        };
        if (user.uid) {
          fetch("https://12-sarver-rahul-sarker18.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(items),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.acknowledged) {
                navigate(from, { replace: true });
                return toast.success("success sign up !!");
              }
            });
        }
      })
      .catch((e) => {});
  };

  return (
    <div>
      <div className="w-full mx-auto my-6 max-w-md p-8 space-y-3 rounded-xl bg-slate-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">signUp</h1>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-100">
              User name *
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
              {...register("username", {
                required: "must enter product name",
              })}
            />
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-100">
              Email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "must enter your email",
              })}
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-100">
              Password *
            </label>
            <input
              type="password"
              {...register("password", {
                required: "must enter your password",
              })}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="type" className="block text-gray-100">
              Please Your Account Type *
            </label>
            <select
              {...register("type", {
                required: "please select a category",
              })}
              className="select select-bordered w-full text-black"
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            {errors.type && (
              <p className="text-red-600">{errors.type.message}</p>
            )}
          </div>
          <button className="block w-full p-3 text-center btn rounded-sm text-white bg-blue-600">
            SignUp
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-100">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={googleHandel} aria-label="Log in with Google" className="p-3 rounded-sm">
            <FcGoogle className="text-5xl font-bold" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-100">
          Don't have an account?
          <Link to="/LogIn" className="underline text-gray-100">
            Login..
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
