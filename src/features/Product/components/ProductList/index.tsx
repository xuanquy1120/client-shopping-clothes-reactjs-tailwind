import {Pagination} from 'components/Pagination';
import { Product } from 'models';
import {ProductCart} from '../ProductCart';
import {ProductSearch} from '../ProductSearch';

export interface IProductListProps {
  listProducts: Product[];
}
export function ProductList({ listProducts }: IProductListProps) {
  return (
    <>
      <div className=" lg:mt-0 lg:px-2 lg:w-4/5 select-none">
        <ProductSearch/>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listProducts.map((product) => (
            <ProductCart product={product} key={product._id}></ProductCart>
          ))}
        </div>
        <div className="flex justify-center mt-10 py-10">
          <Pagination/>
        </div>
      </div>
    </>
  );
}
