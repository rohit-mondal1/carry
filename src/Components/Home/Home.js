import React from 'react';
import ProductsCategories from "../../Page/ProductsCategories/ProductsCategories";
import Hero from "./Hero";
import OurServices from './OurServices/OurServices';

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <Hero />
        </div>
      </div>
      <div>
        <dir className="justify-center text-center ">
          <span className="text-5xl font-semibold border-b-2 text-blue-800 border-black">
            Our Categories
          </span>
        </dir>
        <div>
          <ProductsCategories />
        </div>
      </div>

      {/* Our Services */}
      <div>
        <dir className="justify-center text-center ">
          <span className="text-5xl font-semibold border-b-2 text-blue-800 border-black">Our Services</span>
        </dir>
        <h1 className='text-center pl-8 ml-5'>We Provide The Best Services To Customers.</h1>
        <div className='my-10'>
          <OurServices />
        </div>
      </div>
    </div>
  );
};

export default Home;