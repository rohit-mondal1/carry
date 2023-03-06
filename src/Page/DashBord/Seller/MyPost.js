import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Context/UserContext";

import MyProductsCart from "./MyProductsCart";

const MyPost = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["email", "myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/myProducts?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-16 h-16 mx-auto my-auto border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    );
  }
  const handelDelete = (id) => {
    const conformation = window.confirm("Are you sore !!");
    if (conformation) {
      fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
            return toast.success("Delete Success Full !!");
          }
        });
    }
  };

  return (
    <div>
      <div>
        {data.map((myData) => (
          <MyProductsCart
            handelDelete={handelDelete}
            key={myData._id}
            product={myData}
          ></MyProductsCart>
        ))}
      </div>
      {data.length === 0 && (
        <h1 className="text-black text-center my-8 text-2xl">
          No Data Plies{" "}
          <Link className="text-red-800 underline">Add Products..</Link>
        </h1>
      )}
    </div>
  );
};

export default MyPost;