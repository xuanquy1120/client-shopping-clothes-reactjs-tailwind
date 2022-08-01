import { selectCurrentUser } from 'features/Auth/services/authSlice';
import { addCartUser, CartUser, selectQuantityCart } from 'features/Cart/services/cartSlice';
import { Product } from 'models';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export function ProductCart({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const quantityCart = useAppSelector(selectQuantityCart);
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const handleAddToCart = async (data: CartUser) => {
    try {
      if (user) {
        if (quantityCart >= 99) {
          return alert('Stop add to cart! too much products in cart, please buy them');
        } else {
          await dispatch(addCartUser(data));
        }
      } else {
        navigate('/auth/login');
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg  rounded-lg">
        <img
          className="object-cover w-full rounded-t-md h-72 xl:h-80"
          src={product.image}
          alt={product.category}
        />
        <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200 ">{product.nameProduct}</h4>
        <p className="text-blue-500 font-semibold">${product.price}</p>
        <div className="w-full p-2">
          <button
            className="flex items-center justify-center w-full p-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 select-none"
            onClick={() => handleAddToCart({ quantity: 1, product})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mx-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="mx-1">Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
}
