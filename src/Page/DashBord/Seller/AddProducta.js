import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RiImageAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/Context/UserContext";

const AddProducta = () => {
  const { usersType } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return;
  }

  const imageHostKey = "df1509eeb08fa7011ab2697f6fe3f944";
  // from handler
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const img = imageData.data.url;
          const date = new Date();
          const currentTime = date.toLocaleTimeString();
          const currentDate = date.toLocaleDateString();
          const product = {
            sellerName: data.sellerName,
            email: data.email,
            phone: data.phone,
            productName: data.productName,
            originalPrice: parseFloat(data.originalPrice),
            resellPrice: parseFloat(data.resellPrice),
            image: img,
            location: data.sellerLocation,
            postDate: currentDate,
            postTime: currentTime,
            category: data.category,
            condition: data.condition,
            yearsOfUse: data.yearsOfUse,
            description: data.description,
          };
          fetch("http://localhost:8000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                navigate("/");
                return toast.success(' post success full !!')
              }
            });
        }
      });
  };

  return (
    <div>
      <div className=" w-full">
        <div className=" my-5 flex items-center justify-center">
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="bg-slate-900 text-white w-11/12 md:w-4/5 p-5 rounded-2xl"
          >
            <h2 className="text-4xl text-white mb-3 font-bold text-center capitalize ">
              Add Your product
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="sellerName"
                >
                  Seller Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input w-full  text-black border-2 border-neutral "
                  id="sellerName"
                  defaultValue={usersType?.name}
                  readOnly
                  {...register("sellerName")}
                />
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="product-name"
                >
                  Product Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="product name"
                  className="input w-full text-black border-2 border-neutral "
                  id="product-name"
                  {...register("productName", {
                    required: "must enter product name",
                  })}
                />
                {errors.productName && <p>{errors.productName.message}</p>}
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input w-full border-2 border-neutral text-black "
                  defaultValue={usersType?.email}
                  readOnly
                  id="seller-email"
                  {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="phone"
                >
                  phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="phone number"
                  className="input w-full border-2 border-neutral text-black"
                  id="seller-number"
                  {...register("phone", {
                    required: "must enter phone number",
                  })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="original-price"
                >
                  Original price <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="original-price"
                  className="input w-full border-2 border-neutral text-black"
                  id="original-price"
                  {...register("originalPrice", {
                    required: "must enter the price: ",
                  })}
                />
                {errors.originalPrice && <p>{errors.originalPrice.message}</p>}
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="resellPrice"
                >
                  reselling price <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="resellPrice"
                  className="input w-full border-2 border-neutral text-black"
                  id="resellPrice"
                  {...register("resellPrice", {
                    required: "must enter a price: ",
                  })}
                />
                {errors.resellPrice && <p>{errors.resellPrice.message}</p>}
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="yearsOfUse"
                >
                  Years of Use <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="years of use"
                  className="input w-full border-2 border-neutral  text-black"
                  id="yearsOfUse"
                  {...register("yearsOfUse", {
                    required: "must enter how many years use.",
                  })}
                />
                {errors.yearsOfUse && <p>{errors.yearsOfUse.message}</p>}
              </div>
              <div>
                <label
                  className="capitalize text-xl font-semibold"
                  htmlFor="location"
                >
                  location <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="location"
                  className="input w-full border-2 border-neutral  text-black"
                  id="location"
                  {...register("sellerLocation", {
                    required: "enter a location",
                  })}
                />
                {errors.sellerLocation && (
                  <p>{errors.sellerLocation.message}</p>
                )}
              </div>

              <div className="">
                <label
                  className="capitalize font-semibold text-xl"
                  htmlFor="product-category"
                >
                  category <span className="text-red-600">*</span>
                </label>
                <div>
                  <select
                    name="category"
                    id="category"
                    className="input w-full border-2 border-neutral text-black"
                    {...register("category", {
                      required: "please select a category",
                    })}
                  >
                    {categories?.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p>{errors.category.message}</p>}
                </div>
                <div>
                  <label
                    className="capitalize text-xl font-semibold my-2 block"
                    htmlFor="condition"
                  >
                    Condition <span className="text-red-600">*</span>
                  </label>
                  <div className="flex  gap-3 capitalize">
                    <label htmlFor="excellent">
                      <input
                        type="radio"
                        name="condition"
                        value="excellent"
                        id="excellent"
                        className="mr-1"
                        {...register("condition", {
                          required: "must select an condition",
                        })}
                      />
                      excellent
                    </label>
                    <label htmlFor="good">
                      <input
                        type="radio"
                        name="condition"
                        id="good"
                        value="good"
                        className="mr-1"
                        {...register("condition", {
                          required: "must select an condition",
                        })}
                      />
                      good
                    </label>
                    <label htmlFor="fair">
                      <input
                        type="radio"
                        name="condition"
                        value="fair"
                        id="fair"
                        className="mr-1"
                        {...register("condition", {
                          required: "must select an condition",
                        })}
                      />
                      fair
                    </label>
                  </div>
                  {errors.condition && <p>{errors.condition.message}</p>}
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="image"
                  className="text-xl capitalize font-semibold "
                >
                  Upload Image <span className="text-red-600">*</span>
                </label>
                <label
                  htmlFor="image"
                  className="flex items-center gap-4 px-2 py-4 w-full 
                       border-2 border-dashed"
                >
                  <RiImageAddFill className="w-16  h-16 text-primary"></RiImageAddFill>
                  <input
                    type="file"
                    id="image"
                    placeholder="image"
                    className="placeholder: text-base "
                    {...register("image", {
                      required: "must upload an image",
                    })}
                  />
                </label>
                {errors.image && <p>{errors.image.message}</p>}
              </div>
            </div>

            <div className="flex gap-2 flex-col mt-3">
              <label
                htmlFor="message"
                className="text-white font-semibold capitalize text-xl "
              >
                message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="rounded-lg  text-black p-3"
                placeholder="Message"
                {...register("description", {
                  required: "must enter a description",
                  minLength: {
                    value: 30,
                    message: "description must be 30 character",
                  },
                })}
              ></textarea>
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className="flex items-center justify-center  mt-4">
              <button
                type="submit"
                className="bg-primary text-xl px-8 rounded-3xl hover:bg-transparent hover:text-primary   hover:border-2 border-primary transition-all duration-500   py-3 "
              >
                Add Product{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducta;
