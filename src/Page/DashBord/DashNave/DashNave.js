import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Components/Context/UserContext";

const DashNave = () => {
  const { usersType  } = useContext(AuthContext);

  

  const manuList = (
    <>
      {usersType?.type === "Buyer" ? (
        <>
          <li>
            <NavLink to="/DashBord/me">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/my_book">My Book</NavLink>
          </li>{" "}
        </>
      ) : undefined}

      {usersType?.type === "Seller" ? (
        <>
          <li>
            <NavLink to="/DashBord/me">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/add_Products">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/my_Post">My Products</NavLink>
          </li>
        </>
      ) : undefined}
      {usersType?.type === "Admin" ? (
        <>
          <li>
            <NavLink to="/DashBord/me">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/All_Buyers">All Buyers</NavLink>
          </li>

          <li>
            <NavLink to="/DashBord/All_Seller">All Seller</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/Reported_Items">Reported Items</NavLink>
          </li>
        </>
      ) : undefined}
    </>
  );

  return (
    <div className="navbar  p-4  bg-blue-200 rounded-none  shadow-lg ">
      <div>
        <ul className="menu menu-horizontal p-0 text-xl font-semibold text-blue-800">
          {manuList}
        </ul>
      </div>
    </div>
  );
};

export default DashNave;
