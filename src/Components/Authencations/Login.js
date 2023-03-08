import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Login = () => {
  const { logIn, loginGoogle } = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleAddProduct = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        if (user?.uid) {
          navigate(from, { replace: true });
          return toast.success("login success full !!");
        }
      })
      .catch((e) => console.error(e.message));
  };
  const googleHandel = () => {
    loginGoogle()
    .then((res) => {
      const user = res.user
    
      const {email , displayName} = user;
      const items ={
        name :displayName,
        email,
        type :"Buyer"
       }
      if (user.uid) {
        fetch("http://localhost:8000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(items),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data?.acknowledged){
              navigate(from, { replace: true });
              return toast.success('success log in !!')
            }
          });
      }
    })
      .catch((e) => {});
  };
  return (
    <div>
      <div className="w-full mx-auto my-6 max-w-md p-8 space-y-3 rounded-xl bg-slate-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleAddProduct}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-100">
              Email *
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-100">
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
          <button
            onClick={googleHandel}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-5xl font-bold" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link to="/Register" className="underline text-gray-100">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
