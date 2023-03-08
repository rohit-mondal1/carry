import React, { useEffect, useState } from 'react';
import CatogoriCart from './CatogoriCart';

const ProductsCategories = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch("https://12-sarver-rahul-sarker18.vercel.app/categories")
          .then((res) => res.json())
          .then((data) => setProducts(data));
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
            {products.map(product =><CatogoriCart product={product} key={product.name}></CatogoriCart>)}
        </div>
    );
};

export default ProductsCategories;