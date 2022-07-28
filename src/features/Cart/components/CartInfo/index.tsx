import { cartActions, selectProductCart } from 'features/Cart/services/cartSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';

export function CartInfo({ quantityCart }: { quantityCart: number }) {
  const dispatch = useDispatch();
  const listProducts = useAppSelector(selectProductCart);
  const handleRemoveProduct = (_id: {}) => {
    dispatch(cartActions.removeProductInCart(_id));
  };
  const handleChangeQuantityProduct = (_id: any, typeQuantity: any) => {
    const value = { _id, typeQuantity };
    if (typeQuantity === 'plus') {
      if (quantityCart > 99) {
        return alert('Stop add to cart! too much products in cart, please buy them');
      } else {
        dispatch(cartActions.changeQuantityProduct(value));
      }
    } else {
      dispatch(cartActions.changeQuantityProduct(value));
    }
  };
  return (
    <>
      <div className="flex justify-between border-b p-4">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{quantityCart} Items</h2>
      </div>
      <div className="flex  p-4">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
      </div>
      <div className="h-96 overflow-y-auto overflow-x-hidden px-10">
        {listProducts.map((item) => (
          <div
            key={item.product._id}
            className="flex relative items-center hover:bg-gray-100 -mx-8 my-5 shadow-lg rounded-lg"
          >
            <div className="flex w-2/5 py-4">
              <div className="w-full lg:w-32 ">
                <img
                  className="h-24 md:h-40 md:w-32 w-20 shadow-lg rounded-lg  "
                  src={item.product.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center gap-4 ml-4 flex-grow">
                <span className="font-bold text-sm">{item.product.nameProduct}</span>
                <span className="text-red-500 text-xs">{item.product.category}</span>
              </div>
            </div>
            <div className="md:flex justify-center w-1/5 select-none cursor-pointer">
              <svg className="fill-current text-gray-600 w-3 mx-auto mb-2 md:m-0" viewBox="0 0 448 512">
                <path
                  d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  onClick={() => handleChangeQuantityProduct(item.product._id, 'minus')}
                />
              </svg>
              <div className="flex justify-center">
                <input
                  className="mx-2 border text-center w-8"
                  step={1}
                  min="0"
                  max="99"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    handleChangeQuantityProduct(item.product._id, e.target.value);
                  }}
                />
              </div>

              <svg className="fill-current text-gray-600 w-3 mx-auto mt-2 md:m-0" viewBox="0 0 448 512">
                <path
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  onClick={() => handleChangeQuantityProduct(item.product._id, 'plus')}
                />
              </svg>
            </div>
            <span className="text-center  w-1/5 font-semibold text-sm">{item.product.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">
              {Math.floor(item.product.price * item.quantity)}
            </span>
            <button
              onClick={() => handleRemoveProduct(item.product._id)}
              className="absolute border right-2 top-2 font-semibold hover:text-red-500 text-gray-500 text-xs shadow-lg rounded-full border-md p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
