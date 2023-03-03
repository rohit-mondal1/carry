import React from "react";
import "./catogory.css";

const CatogoriCart = ({ product }) => {
  const { name, img } = product;
  return (
    <div>
      <div id="div" className="bg-teal-900  text-white p-5 rounded-md">
        <div  className="justify-center items-center text-center h-28">
          <div  className="avatar">
            <div id="img" className="w-28 rounded-full text-center">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold my-3">{name}</h1>
          <button className="btn bg-blue-600 px-4 mt-6">see Products..</button>
        </div>
      </div>
    </div>
  );
};

export default CatogoriCart;
