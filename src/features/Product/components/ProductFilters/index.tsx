import { useState } from 'react';

export interface CategoryProps {
  onChangeCategory: (payload: string) => void;
}

export function ProductFilters({ onChangeCategory }: CategoryProps) {
  const [isCategory, setCategory] = useState('');
  const handleCategory = (category: string) => {
    onChangeCategory(category);
    if (category === isCategory) {
      setCategory('');
    } else {
      setCategory(category);
    }
  };
  return (
    <>
      <div className="space-y-3 lg:w-1/5 lg:space-y-4 mt-0  lg:mt-20 select-none">
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={isCategory === 'Hoodies' ? true : false}
            onChange={() => handleCategory('Hoodies')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => handleCategory('Hoodies')}
          >
            Hoodies
          </button>
        </div>
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={isCategory === 'Jeans' ? true : false}
            onChange={() => handleCategory('Jeans')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => handleCategory('Jeans')}
          >
            Jeans
          </button>
        </div>
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={isCategory === 'Shorts' ? true : false}
            onChange={() => handleCategory('Shorts')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => handleCategory('Shorts')}
          >
            Shorts
          </button>
        </div>
        <div className="flex">
          <input
            type="checkBox"
            className="mr-4"
            checked={isCategory === 'T-Shirt' ? true : false}
            onChange={() => handleCategory('T-Shirt')}
          />
          <button
            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
            onClick={() => handleCategory('T-Shirt')}
          >
            T-shirts
          </button>
        </div>
      </div>
    </>
  );
}
