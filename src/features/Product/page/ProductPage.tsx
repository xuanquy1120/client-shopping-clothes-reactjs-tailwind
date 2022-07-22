import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';

export default function ProductPage() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 ">
        <div className="container p-2 pl-20 pr-20 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <ProductFilters></ProductFilters>
            <ProductList></ProductList>
          </div>
        </div>
      </div>
    </>
  );
}
