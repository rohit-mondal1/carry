import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCard from '../../../Page/Products/ProductsCard';

const AdvertisingProduct = () => {
    const {data =[] } = useQuery({
        queryKey:["advertisingProduct"],
        queryFn: async ()=>{
            const res = await fetch(
              "https://12-sarver-rahul-sarker18.vercel.app/advertisingProduct"
            );
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-10">
           { data.map(product => <ProductsCard PRODUCT ={ product} key={product._id}></ProductsCard>)}
        </div>   
        </div>
    );
};

export default AdvertisingProduct;