import { Loading } from 'components/Loading';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { ProductFilters } from '../components/ProductFilters';
import { ProductList } from '../components/ProductList';
import { getAllProducts } from '../services/productSlice';

export function ProductPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
         await dispatch(getAllProducts());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    })();
  }, [dispatch]);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 ">
        <div className="container p-2 pl-20 pr-20 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <ProductFilters></ProductFilters>
            {loading ? <ProductList></ProductList> : <Loading></Loading>}
          </div>
        </div>
      </div>
    </>
  );
}
