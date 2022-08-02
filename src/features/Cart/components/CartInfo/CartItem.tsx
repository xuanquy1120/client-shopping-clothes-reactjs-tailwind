import { yupResolver } from '@hookform/resolvers/yup';
import { QuantityField } from 'components/FormControl';
import { removeProductInCart, updateCartUser } from 'features/Cart/services/cartSlice';
import { Cart } from 'models/Cart';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/hooks';
import * as yup from 'yup';
interface CartItemProps {
  item: Cart;
}
export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveProduct = (_id: string) => {
    dispatch(removeProductInCart(_id));
  };
  const handleSubmit = async (value: any) => {
    if (value <= 0) return;
    await dispatch(updateCartUser({ product: item.product, quantity: value.quantity }));
  };
  const handleChange = async (value: any) => {
    await dispatch(updateCartUser({ product: item.product, quantity: value }));
  };
  const schema = yup.object().shape({
    quantity: yup.number().min(1).max(99).required('Quantity is required'),
  });

  const form = useForm({
    defaultValues: {
      quantity: item.quantity,
    },
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  return (
    <div
      key={item.product._id}
      className="flex relative items-center hover:bg-gray-100 -mx-8 my-5 shadow-lg rounded-lg"
    >
      <div className="flex w-2/5 py-4">
        <div className="w-full lg:w-32 ">
          <img className="h-24 md:h-40 md:w-32 w-20 shadow-lg rounded-lg  " src={item.product.image} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-4 ml-4 flex-grow">
          <span className="font-bold text-sm">{item.product.nameProduct}</span>
          <span className="text-red-500 text-xs">{item.product.category}</span>
        </div>
      </div>
      <div className="md:flex justify-center w-1/5 select-none cursor-pointer">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <QuantityField form={form} name="quantity" onChange={handleChange} min={1} max={99} />
        </form>
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
  );
};
