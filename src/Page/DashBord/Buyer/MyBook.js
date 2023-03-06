import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Context/UserContext";

const MyBook = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/booking?email=${email}`);
      const data = await res.json();
      return data;
    },
  });

  const handelDelete = () => {};

  console.log("data", data);
  return (
    <div>
      <div></div>
      {data?.length === 0 ? (
        <h1 className="text-black text-center my-8 text-2xl">
          No Data Plies{" "}
          <Link className="text-red-800 underline" to="/DashBord/add_Products">
            Add Products..
          </Link>
        </h1>
      ) : (
        <div className=" w-full">
          <div className="flex items-center justify-center ">
            <h2 className="text-center  text-3xl md:text-4xl  font-bold inline-block text-blue-900 my-4   border-b-2    pb-3 uppercase ">
              My products
            </h2>
          </div>
          <div className="mt-5 ">
            <div className="overflow-x-auto">
              <table className="table table-compact table-zebra  w-full">
                <thead className="text-2xl font-semibold text-primary bg-accent text-center ">
                  <tr>
                    <th>S.I.</th>
                    <th>Image </th>
                    <th>product</th>
                    <th>phone</th>
                    <th>Location</th>
                    <th>price</th>
                    <th>Pay</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-black font-semibold text-center ">
                  {data.map((product, idx) => (
                    <tr key={product._id}>
                      <th>{idx + 1}</th>
                      <td>
                        <div className="avatar">
                          <div className="w-12 rounded">
                            <img
                              src={product?.img}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                        </div>
                      </td>
                      <td>{product.productName}</td>
                      <td>{product.phone}</td>
                      <td>{product.location}</td>
                      <td>${product.price}</td>
                      <td>pay</td>

                      <td>
                        <button
                          onClick={() => {
                            handelDelete(product._id);
                          }}
                        >
                          <AiFillCloseCircle className="text-center text-2xl font-bold text-red-500  "></AiFillCloseCircle>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBook;
