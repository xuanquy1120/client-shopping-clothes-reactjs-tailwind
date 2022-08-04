import React from 'react';
import { Link } from 'react-router-dom';
import img from 'assets/img/cartEmpty.png';
export const ProductEmpty = () => {
  return (
    <>
      <div className="w-full p-10 h-[75vh]  rounded-md bg-white flex flex-col justify-center items-center select-none">
        <img className="w-40 h-40 m-20 " src={img} alt="" />
        <Link
          to="/product"
          className="shadow-lg border-lg rounded-md px-10 py-2 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm"
        >
         not found products
        </Link>
      </div>
    </>
  );
};
