import React from 'react';
import Image from 'assets/img/logo.png';
export default function Navbar() {
  return (
    <>
      <div className="bg-white-300 ">
        <div className=" p-2 pl-20 pr-40 flex gap-x-10 justify-between items-center">
          <img src={Image} alt="logo" />
          <ul className="flex gap-x-10 text-blue-700">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
