import React from 'react';
import CartInfo from '../components/CartInfo';
import DeliveryInfo from '../components/DeliveryInfo';

export default function CartPage() {
  return (
    <>
      <div className="pl-20 pr-20">
        <div className="container  mx-auto mt-10  my-10 ">
          <div className="lg:flex lg:-mx-2  shadow-lg bg-gray-100">
            <div className="px-10 py-10 lg:w-2/3   bg-white shadow-lg   ">
              <CartInfo></CartInfo>
            </div>
            <div className="lg:w-1/3 px-4 py-4">
              <DeliveryInfo></DeliveryInfo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
