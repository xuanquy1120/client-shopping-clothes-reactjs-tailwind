import { selectCurrentUser } from 'features/Auth/services/authSlice';
import { useAppSelector } from 'redux/hooks';
import { CartEmpty } from '../components/CartEmpty';
import { CartInfo } from '../components/CartInfo';
import { DeliveryInfo } from '../components/DeliveryInfo';
import { selectQuantityCart } from '../services/cartSlice';

export function CartPage() {
  const quantityCart = useAppSelector(selectQuantityCart);
  const user = useAppSelector(selectCurrentUser);
  return (
    <>
      {quantityCart > 0 ? (
        <>
          <div className=" lg:px-20 md:px-0">
            <div className="container  mx-auto mt-10  my-10 ">
              <div className="lg:flex lg:-mx-2  shadow-lg bg-gray-100">
                <div className="px-4 py-10 lg:w-2/3   bg-white shadow-lg   ">
                  <CartInfo quantityCart={quantityCart}></CartInfo>
                </div>
                <div className="lg:w-1/3 px-4 py-4">
                  <DeliveryInfo user={user}></DeliveryInfo>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <CartEmpty></CartEmpty>
      )}
    </>
  );
}
