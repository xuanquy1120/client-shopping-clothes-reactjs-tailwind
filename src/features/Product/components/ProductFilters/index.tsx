export interface CategoryProps {
  onChangeCategory: (payload: string) => void;
  category: any;
}
export function ProductFilters({ onChangeCategory, category }: CategoryProps) {
  return (
    <>
      <div className="space-y-3 lg:w-1/5 lg:space-y-4 mt-0  lg:mt-20 select-none">
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={category === 'Hoodies' ? true : false}
            onChange={() => onChangeCategory('Hoodies')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => onChangeCategory('Hoodies')}
          >
            Hoodies
          </button>
        </div>
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={category === 'Jeans' ? true : false}
            onChange={() => onChangeCategory('Jeans')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => onChangeCategory('Jeans')}
          >
            Jeans
          </button>
        </div>
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={category === 'Shorts' ? true : false}
            onChange={() => onChangeCategory('Shorts')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => onChangeCategory('Shorts')}
          >
            Shorts
          </button>
        </div>
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={category === 'T-Shirt' ? true : false}
            onChange={() => onChangeCategory('T-Shirt')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => onChangeCategory('T-Shirt')}
          >
            T-shirts
          </button>
        </div>
      </div>
    </>
  );
}
