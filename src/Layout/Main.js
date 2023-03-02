import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";


const Main = () => {
 
  return (
    <div className="relative">
      
      <div className="sticky top-0"><Header ></Header></div>
     
      <div  style={{minHeight:'100vh'}}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
