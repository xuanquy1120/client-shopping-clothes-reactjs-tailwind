import { cartActions, selectTotalPrice } from 'features/Cart/services/cartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';

export  function DeliveryInfo() {
  const dispatch = useDispatch();
  const totalPrice = useAppSelector(selectTotalPrice);
  const handleBuyProduct = ()  => {
    dispatch(cartActions.buyProduct());
  }
  return (
    <>
      <div className="w-full">
        <form className=" p-5">
          <div className="text-center">
            <h1 className="font-bold text-3xl text-gray-900 pb-10">Bill</h1>
          </div>
          <div>
            <div className="flex -mx-3">
              {/*name  */}
              <div className="w-1/2 px-3 mb-4">
                <input
                  type="text"
                  className="w-full  pl-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Name"
                />
              </div>
              {/* number */}
              <div className="w-1/2 px-3 mb-4">
                <input
                  type="text"
                  className="w-full  pl-4 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Number"
                />
              </div>
            </div>
            {/* email */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-lg bg-white">
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none bg-white "
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            {/* address*/}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-lg bg-white ">
              <input
                className="pl-2 w-full outline-none border-none "
                type="text"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
            {/* note */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-lg bg-white ">
              <input
                className="pl-2 w-full outline-none border-none "
                type="text"
                name="note"
                id="note"
                placeholder="Note"
              />
            </div>
            {/* button -submit */}
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${totalPrice}</span>
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              onClick={handleBuyProduct}
            >
              BUY NOW
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
