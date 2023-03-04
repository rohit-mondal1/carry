import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {


  const handleAddProduct = (e) => {
  e.preventDefault()
  
  const from = e.target.value;
  const email = from.email
  const password = from.password
  };
  return (
    <div>
      <div className="w-full mx-auto my-6 max-w-md p-8 space-y-3 rounded-xl bg-slate-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleAddProduct} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-100">
              Email *
            </label>
            <input
              type="email"
              required
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-100">
              Password *
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-blue-600 btn">
            Log in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <FcGoogle className='text-5xl font-bold' />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link
            to="/"
            className="underline text-gray-100"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;