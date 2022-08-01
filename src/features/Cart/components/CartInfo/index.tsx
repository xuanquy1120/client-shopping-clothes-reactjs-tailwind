import { selectProductCart } from 'features/Cart/services/cartSlice';
import { useAppSelector } from 'redux/hooks';
import { CartItem } from './CartItem';
export function CartInfo({ quantityCart }: { quantityCart: number }) {
  const listProducts = useAppSelector(selectProductCart);
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
          <CartItem item={item} key={item.product._id} />
        ))}
      </div>
    </>
  );
}
