import React from 'react';
import {  NavLink } from "react-router-dom";

const DashNave = () => {
  const manuList = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>

      <li>
        <NavLink to="/Products">Products</NavLink>
      </li>

      <li>
        <NavLink to="/DashBord">DashBord</NavLink>
      </li>

      <li>
        <NavLink to="/Register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  p-4  bg-blue-200 rounded-none  shadow-lg ">
      <div className="navbar-start  flex">
        <ul className="menu menu-horizontal p-0 text-xl font-semibold text-blue-800">
          {manuList}
        </ul>
      </div>
    </div>
  );
};

export default DashNave;