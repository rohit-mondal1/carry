import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCard from '../../../Page/Products/ProductsCard';

const AdvertisingProduct = () => {
    const { data = [], isLoading , refetch } = useQuery({
      queryKey: ["advertisingProduct"],
      queryFn: async () => {
        const res = await fetch(
          "https://12-sarver-rahul-sarker18.vercel.app/advertisingProduct"
        );
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return (
        <div className="flex flex-col mx-auto my-20 m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t dark:bg-gray-700"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
            <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      );
    }
    refetch()
    return (
        <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-10">
           { data.map(product => <ProductsCard PRODUCT ={ product} key={product._id}></ProductsCard>)}
        </div>   
        </div>
    );
};

export default AdvertisingProduct;