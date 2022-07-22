import Pagination from 'components/Pagination';
import React from 'react';
import ProductCart from '../ProductCart';
import ProductSearch from '../ProductSearch';

export default function ProductList() {
  const listProducts = [
    {
      nameProduct: 'Printed T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Slub jersey T-shirt',
      price: 18.7,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
    },
    {
      nameProduct: 'T-shirt with a motif',
      price: 16.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Art T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Printed T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Slub jersey T-shirt',
      price: 18.7,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
    },
    {
      nameProduct: 'T-shirt with a motif',
      price: 16.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Art T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
  ];
  return (
    <>
      <div className=" lg:mt-0 lg:px-2 lg:w-4/5 select-none">
        <ProductSearch></ProductSearch>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listProducts.map((product,index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg  rounded-lg">
              <img
                className="object-cover w-full rounded-t-md h-72 xl:h-80"
                src={product.image}
                alt={product.Category}
              />
              <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200 ">
                {product.nameProduct}
              </h4>
              <p className="text-blue-500 font-semibold">${product.price}</p>
              <div className="w-full p-2">
                <ProductCart></ProductCart>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 py-10">
            <Pagination></Pagination>
          </div>
      </div>
    </>
  );
}
