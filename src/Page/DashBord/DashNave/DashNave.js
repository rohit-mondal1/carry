import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Components/Context/UserContext";

const DashNave = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const email = user?.email;
 
  const { data = [] } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users?gmail=${email}`);
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    for (const datas of data) {
      setUsers(datas);
    }
    for (const datas of data) {
      setUsers(datas);
    }
  }, [data]);

  const manuList = (
    <>
      {users?.type === "Buyer" ? (
        <>
          <li>
            <NavLink to="/DashBord">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/my_book">My Book</NavLink>
          </li>{" "}
        </>
      ) : undefined}

      {users?.type === "Seller" ? (
        <>
          <li>
            <NavLink to="/DashBord">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/add_Products">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/DashBord/my_Products">My Products</NavLink>
          </li>
        </>
      ) : undefined}
      {users?.type === "Admin" ? (
        <>
          <li>
            <NavLink to="/DashBord">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/All_Buyers">All Buyers</NavLink>
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
