import { createBrowserRouter } from "react-router-dom";
import DashBordLayout from "../../Layout/DashBordLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Page/DashBord/Admin/AllBuyers";
import AllSellers from "../../Page/DashBord/Admin/AllSellers";
import ReportedItems from "../../Page/DashBord/Admin/ReportedItems";
import MyBook from "../../Page/DashBord/Buyer/MyBook";
import AddProducta from "../../Page/DashBord/Seller/AddProducta";
import MyPost from "../../Page/DashBord/Seller/MyPost";
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
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "Products/:name",
        element: <Products />,
        loader: async({params})=>fetch(`http://localhost:8000/Products/${params.name}`)
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/LogIn",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/DashBord",
    element: <DashBordLayout />,
    children: [
      {
        path: "/DashBord/me",
        element: <MyBook />,
      },
      {
        path: "/DashBord/my_book",
        element: <MyBook />,
      },
      // seller
      {
        path: "/DashBord/add_Products",
        element: <AddProducta />,
      },
      {
        path: "/DashBord/my_Post",
        element: <MyPost />,
      },
      // admin
      {
        path: "/DashBord/All_Buyers",
        element: <AllBuyers />,
      },
      {
        path: "/DashBord/All_Seller",
        element: <AllSellers />,
      },

      {
        path: "/DashBord/Reported_Items",
        element: <ReportedItems />,
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);