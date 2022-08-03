import { selectQuantityProduct } from "features/Product/services/productSlice";
import { useAppSelector } from "redux/hooks";

export interface SearchProps {
  onChangeSearch: (payload: any) => void;
  nameProduct: any;
}
export function ProductSearch({ onChangeSearch, nameProduct }: SearchProps) {
  const quantityProduct = useAppSelector(selectQuantityProduct)
  return (
    <>
      <div className="flex items-center flex-wrap justify-between text-sm tracking-widest uppercase ">
        <div className="flex items-center">
          <p className="text-gray-500 dark:text-gray-300">{quantityProduct + " Product"}</p>
        </div>
        <form className="flex items-center ">
          <label className="sr-only">Search</label>

          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              value={nameProduct}
              onChange={(e) => onChangeSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
