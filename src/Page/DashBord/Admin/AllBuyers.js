import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const AllBuyers = () => {
    const { data = [], refetch } = useQuery({
      queryKey: ["allBuyers"],
      queryFn: async () => {
        const res = await fetch(
          "https://12-sarver-rahul-sarker18.vercel.app/allBuyers"
        );
        const data = await res.json();
        return data;
      },
    });

  

    const handelDelete = (id) => {
      const conformation = window.confirm("Are you sore !!");
      if (conformation) {
        fetch(`https://12-sarver-rahul-sarker18.vercel.app/users/${id}`, {
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
      <div></div>
      {data?.length === 0 ? (
        <h1 className="text-black text-center my-8 text-2xl">
          No Data Plies{" "}
          <Link className="text-red-800 underline" to="/">
            .........
          </Link>
        </h1>
      ) : (
        <div className=" w-full">
          <div className="flex items-center justify-center ">
            <h2 className="text-center  text-3xl md:text-4xl  font-bold inline-block text-blue-900 my-4   border-b-2    pb-3 uppercase ">
              All Buyers
            </h2>
          </div>
          <div className="mt-5 ">
            <div className="overflow-x-auto">
              <table className="table table-compact table-zebra  w-full">
                <thead className="text-2xl font-semibold text-primary bg-accent text-center ">
                <tr>
                      <th>S.I.</th>
                      <th>Name </th>
                      <th>Email</th>
                      <th>Type</th>
                      
                      <th>Id</th>

                      <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-black font-semibold text-center ">
                  {data.map((product, idx) => (
                    <tr key={product._id}>
                      <th>{idx + 1}</th>
                      
                      <td>{product.name}</td>
                        <td>{product.email}</td>
                        <td>{product.type}</td>
                        <td>{product._id}</td>
                      

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
        </div>
    );
};

export default AllBuyers;