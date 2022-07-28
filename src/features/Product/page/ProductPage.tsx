import { productsApi } from 'api';
import {Loading} from 'components/Loading';
import { Product } from 'models';
import { useEffect, useState } from 'react';
import {ProductFilters} from '../components/ProductFilters';
import {ProductList} from '../components/ProductList';

export function ProductPage() {
  const [loading, setLoading] = useState(false);
  const [listProducts, setListProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { results } = await productsApi.getAll();
        setListProducts(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    })();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 ">
        <div className="container p-2 pl-20 pr-20 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <ProductFilters></ProductFilters>
            {loading ? <ProductList listProducts={listProducts}></ProductList> : <Loading></Loading>}
          </div>
        </div>
      </div>
    </>
  );
}
