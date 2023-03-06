import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCard from '../../../Page/Products/ProductsCard';

const AdvertisingProduct = () => {
    const {data =[] } = useQuery({
        queryKey:["advertisingProduct"],
        queryFn: async ()=>{
            const res =await fetch('http://localhost:8000/advertisingProduct')
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