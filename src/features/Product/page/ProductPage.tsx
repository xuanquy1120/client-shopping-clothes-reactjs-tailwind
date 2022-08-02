import { Loading } from 'components/Loading';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { ProductFilters } from '../components/ProductFilters';
import { ProductList } from '../components/ProductList';
import { findProduct, getAllProducts, productActions, selectFilter } from '../services/productSlice';

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
    if (filterProduct?.category === category) {
      dispatch(productActions.removeFilterProduct());
    } else {
      await dispatch(findProduct({ category: category, nameProduct: filterProduct?.nameProduct,page: 1, limit: 4 }));
    }
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-900 ">
        <div className="container p-2 pl-20 pr-20 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <ProductFilters
              onChangeCategory={handleCategory}
              category={filterProduct?.category}
            ></ProductFilters>
            {loading ? <ProductList></ProductList> : <Loading></Loading>}
          </div>
        </div>
      </div>
    </>
  );
}
