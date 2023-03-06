import React from 'react';

const MyProductsCart = ({ product , handelDelete}) => {
  console.log(product);
  const { category, postDate, image, _id, resellPrice } = product;

 
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight text-black">
        Invoices
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Invoice </th>
              <th className="p-3">category</th>
              <th className="p-3">Issued</th>
              <th className="p-3">Id</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
              <td className="p-3">
                <div className="avatar">
                  <div className="w-12 rounded border-white ">
                    <img src={image} alt={image} />
                  </div>
                </div>
              </td>
              <td className="p-3">
                <p>{category}</p>
              </td>
              <td className="p-3">
                <p>{postDate}</p>
              </td>
              <td className="p-3">
                <p>{_id}</p>
              </td>
              <td className="p-3 text-right">
                <p>{resellPrice}</p>
              </td>
              <td className="p-3 text-right">
                <span onClick={()=>{handelDelete(_id)}} className="px-6 btn btn-outline btn-secondary font-semibold ">
                  Delete
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProductsCart;