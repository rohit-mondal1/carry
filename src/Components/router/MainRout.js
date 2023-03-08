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
import Profile from "../../Page/Profile/Profile";
import Login from "../Authencations/Login";
import SignUp from "../Authencations/SignUp";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AdminRouter from "./AdminRouter";
import BuyerRouter from "./BuyerRouter";
import PrivateRout from "./PrivateRout";
import SellerRout from "./SellerRout";

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
        loader: async ({ params }) =>
          fetch(
            `https://12-sarver-rahul-sarker18.vercel.app/Products/${params.name}`
          ),
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
        path: "/DashBord",
        element: (
          <PrivateRout>
            <Profile />
          </PrivateRout>
        ),
      },
      {
        path: "/DashBord/me",
        element: <Profile />,
      },
      {
        path: "/DashBord/my_book",
        element: (
          <PrivateRout>
            <BuyerRouter>
              <MyBook />
            </BuyerRouter>
          </PrivateRout>
        ),
      },
      // seller
      {
        path: "/DashBord/add_Products",
        element: (
          <PrivateRout>
            <SellerRout>
              <AddProducta />
            </SellerRout>
          </PrivateRout>
        ),
      },
      {
        path: "/DashBord/my_Post",
        element: (
          <PrivateRout>
            <SellerRout>
              <MyPost />
            </SellerRout>
          </PrivateRout>
        ),
      },
      // admin
      {
        path: "/DashBord/All_Buyers",
        element: (
          <PrivateRout>
            <AdminRouter>
              <AllBuyers />
            </AdminRouter>
          </PrivateRout>
        ),
      },
      {
        path: "/DashBord/All_Seller",
        element: (
          <PrivateRout>
            <AdminRouter>
              <AllSellers />
            </AdminRouter>
          </PrivateRout>
        ),
      },

      {
        path: "/DashBord/Reported_Items",
        element: (
          <PrivateRout>
            <AdminRouter>
              <ReportedItems />
            </AdminRouter>
          </PrivateRout>
        ),
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);