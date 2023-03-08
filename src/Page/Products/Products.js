import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const data = useLoaderData()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-10">
           { data.map(product => <ProductsCard PRODUCT ={ product} key={product._id}></ProductsCard>)}
        </div>
    );
};

export default Products;