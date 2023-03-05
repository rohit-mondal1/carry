import React from "react";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { BsFlagFill } from "react-icons/bs";

const ProductsCard = ({ PRODUCT }) => {
  const {
    _id,
    condition,
    email,
    image,
    location,
    originalPrice,
    phone,
    postDate,
    postTime,
    productName,
    resellPrice,
    sellerName,
    yearsOfUse,
    description,
    isVerified,
    isReported,
  } = PRODUCT;

  const handleReport = (product) => {
    // fetch(
    //    `https://productko-server.vercel.app/products/reported/${product._id}`,
    //    {
    //       method: "put",
    //       headers: {
    //          authorization: `bearer ${localStorage.getItem(
    //             "productKoToken"
    //          )}`,
    //       },
    //    }
    // )

    console.log(product);
  };

  return (
    <div>
      <div className="border-2 my-4 border-accent p-3 rounded-2xl  text-white bg-teal-900 text-sm ">
        <div className="rounded-2xl">
          <img src={image} className=" w-full rounded-lg" alt={productName} />
        </div>
        <div className="flex  flex-col flex-grow gap-4">
          <div className="flex flex-col gap-2">
            <div className="capitalize space-y-1 ">
              <div className="flex justify-between items-center mt-3">
                <h3 className="text-2xl">{productName}</h3>
                <div className="flex items-center justify-center gap-3  text-base">
                  <BsFlagFill
                    onClick={() => handleReport(PRODUCT)}
                    className={`cursor-pointer text-xl ${
                      isReported && "text-red-500"
                    }`}
                  ></BsFlagFill>
                  <p>{isReported ? "reported" : "report"}</p>
                </div>
              </div>

              <div className="flex gap-1">
                <p> use : {yearsOfUse} / </p>
                <p>quality: {condition}</p>
              </div>
              <p>
                posted at: {postTime} on {postDate}{" "}
              </p>
              <button className="px-2 py-1 bg-stone-200 text-black inline-block mr-2 rounded-xl font-semibold capitalize">
                price: ${resellPrice}
              </button>
              <button className="px-2 py-1 bg-stone-200 text-black inline-block mr-2 rounded-xl font-semibold capitalize">
                regular: ${originalPrice}
              </button>
            </div>
            <div className="capitalize">
              <h1 className="text-2xl ">Seller Info</h1>
              <h3 className="text-base font-bold flex items-center justify-start gap-1">
                Name: {sellerName}
                {isVerified && (
                  <MdVerified className="text-[20px] text-green-500 "></MdVerified>
                )}
              </h3>
              <p>
                email: <span className=" normal-case ">{email}</span>
              </p>
              <p>Phone: {phone}</p>
              <p>Location: {location}</p>
            </div>
          </div>
          <div className="">
            <p>{description}</p>
          </div>
          <div>
            <Link >
              <button className="px-2 py-2 border-red-700 border-2 bg-blue-800  text-white inline-block mr-2 rounded-xl font-bold  capitalize w-full text-xl ">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductsCard;
