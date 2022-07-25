import Pagination from 'components/Pagination';
import { Product } from 'models';
import ProductCart from '../ProductCart';
import ProductSearch from '../ProductSearch';

export interface IProductListProps {
  listProducts: Product[];
}
export default function ProductList({ listProducts }: IProductListProps) {
  return (
    <>
      <div className=" lg:mt-0 lg:px-2 lg:w-4/5 select-none">
        <ProductSearch></ProductSearch>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-lg  rounded-lg"
            >
              <img
                className="object-cover w-full rounded-t-md h-72 xl:h-80"
                src={product.image}
                alt={product.category}
              />
              <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200 ">{product.nameProduct}</h4>
              <p className="text-blue-500 font-semibold">${product.price}</p>
              <div className="w-full p-2">
                <ProductCart></ProductCart>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 py-10">
          <Pagination></Pagination>
        </div>
      </div>
    </>
  );
}
