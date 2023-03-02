import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../Error/Error";
import Home from "../Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path:'/'  , element: <Home/>
    }
     
      
    ],
  },
  {path:'*', element:<Error></Error>}
]);