import { Pagination } from 'components/Pagination';
import { selectProducts } from 'features/Product/services/productSlice';
import { useAppSelector } from 'redux/hooks';
import { ProductCart } from '../ProductCart';
import { ProductSearch } from '../ProductSearch';

export function ProductList() {
  const {products} = useAppSelector(selectProducts);
  return (
    <>
      <div className=" lg:mt-0 lg:px-2 lg:w-4/5 select-none">
        <ProductSearch/>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
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
