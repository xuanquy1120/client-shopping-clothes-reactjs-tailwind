import { unwrapResult } from '@reduxjs/toolkit';
import { Pagination } from 'components/Pagination';
import {
  findProduct,
  getAllProducts,
  selectFilter,
  selectPagination,
  selectProducts,
} from 'features/Product/services/productSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { ProductCart } from '../ProductCart';
import { ProductSearch } from '../ProductSearch';
export function ProductList() {
  const { products } = useAppSelector(selectProducts);
  const filterProduct = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const pagination = useAppSelector(selectPagination);

  const handleChangePage = async (page: number, limit: number) => {
    try {
      if (filterProduct) {
        const results = await dispatch(
          findProduct({
            category: filterProduct?.category,
            nameProduct: filterProduct?.nameProduct,
            page: page,
            limit: limit,
          })
        );
        unwrapResult(results);
      } else {
        const results = await dispatch(getAllProducts({ page, limit }));
        unwrapResult(results);
      }
    } catch (error) {}
  };
  const handleChangeSearch = async (nameProduct: string) => {
    try {
      const results = await dispatch(
        findProduct({ nameProduct: nameProduct, category: filterProduct?.category, page: 1, limit: 8 })
      );
      unwrapResult(results);
    } catch (error) {

    }
  };
  return (
    <>
      <div className=" lg:mt-0 lg:px-2 lg:w-4/5 select-none">
        <ProductSearch onChangeSearch={handleChangeSearch} nameProduct={filterProduct?.nameProduct} />
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCart product={product} key={product._id}></ProductCart>
          ))}
        </div>
        <div className="flex justify-center mt-10 py-10">
          <Pagination
            page={pagination.page}
            total={pagination.total}
            limit={pagination.limit}
            onPageChange={handleChangePage}
          />
        </div>
      </div>
    </>
  );
}
