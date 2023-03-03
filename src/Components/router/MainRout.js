import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Products from "../../Page/Products/Products";
import Login from "../Authencations/Login";
import SignUp from "../Authencations/SignUp";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Home from "../Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path:'/'  , element: <Home/>
    },
    {
      path:'/home'  , element: <Home/>
    },
    {
      path:'/Products'  , element: <Products/>
    },
    {
      path:'/blog'  , element: <Blog/>
    },
    {
      path:'/LogIn'  , element: <Login/>
    },
    {
      path:'/Register'  , element: <SignUp/>
    },   
    {
      path:'/DashBord'  
    },   
    ],
  },
  {path:'*', element:<Error></Error>}
]);