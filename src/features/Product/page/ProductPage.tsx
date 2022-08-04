import { unwrapResult } from '@reduxjs/toolkit';
import { Loading } from 'components/Loading';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { ProductFilters } from '../components/ProductFilters';
import { ProductList } from '../components/ProductList';
import { findProduct, getAllProducts, selectFilter } from '../services/productSlice';

export function ProductPage() {
  const [loading, setLoading] = useState(false);
  const filterProduct = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        if (!filterProduct) {
          await dispatch(getAllProducts({ page: 1, limit: 8 }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    })();
  }, [dispatch, filterProduct]);
  const handleCategory = async (category: string) => {
   try {
    if (filterProduct?.category === category) {
      const results = await dispatch(
        findProduct({ category: '', nameProduct: filterProduct?.nameProduct, page: 1, limit: 8 })
      );
      unwrapResult(results);
    } else {
      const results = await dispatch(
        findProduct({ category: category, nameProduct: filterProduct?.nameProduct, page: 1, limit: 8 })
      );
      unwrapResult(results);
    }
   } catch (error:any) {

   }
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-900 ">
        <div className="container p-2 pl-20 pr-20 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <ProductFilters
              onChangeCategory={handleCategory}
            ></ProductFilters>
            {loading ? <ProductList></ProductList> : <Loading></Loading>}
          </div>
        </div>
      </div>
    </>
  );
}
