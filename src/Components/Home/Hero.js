import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left">
            <h1 className="text-3xl text-blue-800 font-bold leading-none sm:text-6xl">
              Buy Good
            </h1>
            <h1 className="text-4xl mt-2 font-semibold leading-none sm:text-4xl">
              Products at low price.
            </h1>
            <p className="mt-6  mb-8 text-lg sm:mb-12">
              We are a reseller company who provides you some products at low
              price
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-900 text-blue-100"
              >
                Product
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 sm:mt-[-30px] lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/qDmnmq9/home-01.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
