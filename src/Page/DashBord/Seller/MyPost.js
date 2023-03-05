import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/Context/UserContext';
import MyProductsCart from './MyProductsCart';

const MyPost = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email
    const {data=[]} = useQuery({
        queryKey:['email', 'myProducts'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:8000/myProducts?email=${email}`)
            const data = await res.json()
            return data;
        }
    })
    
    return (
        <div>
          {data.map(myData => <MyProductsCart key={myData._id} product ={myData}></MyProductsCart>)}
        </div>
    );
};

export default MyPost;