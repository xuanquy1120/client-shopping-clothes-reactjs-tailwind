export function ProductFilters() {
  return (
    <>
      <div className="space-y-3 lg:w-1/5 lg:space-y-4 mt-0  lg:mt-20 select-none">
        <div className="flex">
          <input type="checkBox" className="mr-4" />
          <button className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
            Hoodies
          </button>
        </div>
        <div className="flex">
          <input type="checkBox" className="mr-4" />
          <button className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
            Shirts
          </button>
        </div>
        <div className="flex">
          <input type="checkBox" className="mr-4" />
          <button className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
            Jeans
          </button>
        </div>
        <div className="flex">
          <input type="checkBox" className="mr-4" />
          <button className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
            Shorts
          </button>
        </div>
        <div className="flex">
          <input type="checkBox" className="mr-4" />
          <button className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
            T-shirts
          </button>
        </div>
      </div>
    </>
  );
}
