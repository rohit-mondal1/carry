import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import ProductsCategories from "../../Page/ProductsCategories/ProductsCategories";
import { AuthContext } from '../Context/UserContext';
import AdvertisingProduct from './AdvertisingProduct/AdvertisingProduct';
import Hero from "./Hero";
import OurServices from './OurServices/OurServices';

const Home = () => {
  const {setUsersType , user} = useContext(AuthContext)
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
      setUsersType(datas);
    }
    
  }, [data ,setUsersType]);
  return (
    <div>
      <div>
        <div>
          <Hero />
        </div>
      </div>
      <div className='my-10'>
        <dir className="justify-center text-center ">
          <span className="text-5xl font-semibold border-b-2 text-blue-800 border-black">
            Our Categories
          </span>
        </dir>
        <h1 className='text-center pl-8 my-8 text-xl'>Product's all categories are available here. You can see all product's here by clicking our categories .</h1>
        <div>
          <ProductsCategories />
        </div>
      </div>
      {/* add */}
      <div className='my-14'>
        <dir className="justify-center text-center ">
          <span className="text-5xl font-semibold border-b-2 text-blue-800 border-black">
           Advertising Products
          </span>
        </dir>
        {/* <h1 className='text-center pl-8 my-8 text-xl'>Product's all categories are available here. You can see all product's here by clicking our categories .</h1> */}
        <div>
          <AdvertisingProduct />
        </div>
      </div>

      {/* Our Services */}
      <div className='my-20'>
        <dir className="justify-center text-center ">
          <span className="text-5xl font-semibold border-b-2 text-blue-800 border-black">Our Services</span>
        </dir>
        <h1 className='text-center pl-8 my-8 text-xl'>We Provide The Best Services To Customers.</h1>
        <div className='my-10'>
          <OurServices />
        </div>
      </div>
    </div>
  );
};

export default Home;