import React from 'react';
import Image from 'assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { selectCurrentUser } from 'features/Auth/services/authSlice';

import { selectQuantityCart } from 'features/Cart/services/cartSlice';
import { UserSelectorMenu } from 'components/UserSelectorMenu';
export function Navbar() {
  const user = useAppSelector(selectCurrentUser);
  const quantityCart = useAppSelector(selectQuantityCart);
  return (
    <>
      <div className="bg-white-300 fixed inset-x-0 top-0 bg-white z-10 shadow-md h-20 select-none ">
        <div className="p-4 lg:px-20 flex  gap-x-10 justify-between items-center md:px-4">
          <Link to="/">
            <img className="w-32 " src={Image} alt="logo" />
          </Link>
          <ul className="flex gap-x-10 text-blue-700">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {quantityCart > 0 && (
                  <span className="absolute rounded-full bg-blue-700 w-5 h-5 text-center leading-5 text-white  top-4 -right-2 font-semibold">
                    {quantityCart}
                  </span>
                )}
              </Link>
            </li>
            <li> {user ? <UserSelectorMenu user={user}></UserSelectorMenu> : <></>}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
