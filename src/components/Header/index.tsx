import React from 'react';

import ImageUser from 'assets/img/user.png';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="bg-white-300">
        <div className="flex select-none">
          <div className="pl-20 mt-60 w-2/3">
            <h1 className="text-5x1 font-bold text-blue-700 pb-10 w-3/4">
              Great Discount On Latest Collections
            </h1>
            <p className="pb-10 w-3/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid earum voluptas, unde
              laudantium aliquam ipsum,
            </p>
            <Link className="py-2 px-5 text-white rounded-lg bg-blue-700" to="/auth">
              Shop Now
            </Link>
          </div>
          <div className="relative">
            <img src={ImageUser} alt="User" />
          </div>
        </div>
      </div>
    </>
  );
}
