import React, { useContext, useState } from "react";
import { MdVerified } from "react-icons/md";
import { BsFlagFill } from "react-icons/bs";
import { AuthContext } from "../../Components/Context/UserContext";
import { toast } from "react-hot-toast";

const ProductsCard = ({ PRODUCT }) => {
  const { user } = useContext(AuthContext);
  const [productData, setProductData] = useState(null);
  const [productTow, setProductTow] = useState(null);
  
  const {
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
    verify,
    
  } = PRODUCT;

  const handleReport = (product) => {
    setProductData(product);
  };

  const handelSubmite = (e) => {
    e.preventDefault();
    const phone = e.target.username.value;
    const location = e.target.location.value;
    const data = {
      phone,
      location,
      email: user?.email,
      img: productData?.image,
      id: productData?._id,
      price: productData?.resellPrice,
      productName: productData?.productName,
    };

    fetch("https://12-sarver-rahul-sarker18.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((datas) => {
        if (datas.acknowledged) {
          e.target.reset();
          setProductData(null);
          return toast.success(" Book success full !!");
        }
      });
  };

  const handelRepo = (productData) => {
    setProductTow(productData);
  };

  const handelsub = (e) => {
    e.preventDefault();
    // const data = {
    //   email: user?.email,
    //   img: productTow?.image,
    //   id: productTow?._id,
    //   price: productTow?.resellPrice,
    //   productName:productTow?.productName
    // };
    console.log("object", productTow?._id);
    fetch(
      `https://12-sarver-rahul-sarker18.vercel.app/postreop?id=${productTow?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // refetch();
          setProductTow(null);
          return toast.success("report Success Full !!");
        }
      });
    //
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
                  <label  htmlFor="my-modal-4">

                  <h1 className="flex items-center gap-2" onClick={()=>handelRepo(PRODUCT)}>
                  <BsFlagFill
                    
                    className={`cursor-pointer text-xl`}
                    ></BsFlagFill>
                  <span>Report</span>
                  </h1>
                    </label>
                  
                  
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
                price: {resellPrice} RS
              </button>
              <button className="px-2 py-1 bg-stone-200 text-black inline-block mr-2 rounded-xl font-semibold capitalize">
                regular: {originalPrice} RS
              </button>
            </div>
            <div className="capitalize">
              <h1 className="text-2xl ">Seller Info</h1>
              <h3 className="text-base font-bold flex items-center justify-start gap-1">
                Name: {sellerName}
                {verify === "verify" && (
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
            {/* <button>Book Now</button> */}
            <label
              htmlFor="my-modal-3"
              onClick={() => {
                handleReport(PRODUCT);
              }}
              className="px-2 py-2 btn border-red-700 border-2 bg-blue-800  text-white inline-block mr-2 rounded-xl font-bold  capitalize w-full text-xl "
            >
              Book Now
            </label>
          </div>
        </div>
        <div></div>
      </div>


      {/* Put this part before </body> tag */}
     {productData && <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Book-ing</h1>
            <form
              onSubmit={handelSubmite}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  Number
                </label>
                <input
                  required
                  type="number"
                  name="username"
                  id="username"
                  placeholder="Number"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-400">
                  Location
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  id="location"
                  placeholder="location"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
                />
              </div>
              <button className="block w-full p-3 btn text-center rounded-sm text-gray-100 bg-blue-600">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
     </div> }


     <div>
      {productTow && <div> <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Report</h1>
            <form
              onSubmit={handelsub}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">
                  message
                </label>
                <input
                  required
                  type="text"
                  name="username"
                  id="username"
                  placeholder="message"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
                />
              </div>
              
              <button className="block w-full p-3 btn text-center rounded-sm text-gray-100 bg-blue-600">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
     </div>}
     </div>
      
    </div>
  );
};

export default ProductsCard;
