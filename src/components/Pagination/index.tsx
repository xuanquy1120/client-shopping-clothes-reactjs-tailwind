export interface IPaginationProps {
  page: number;
  total: number;
  limit: number;
  onPageChange: (page: number, limit: number) => void;
}
export function Pagination({ total, limit, page, onPageChange }: IPaginationProps) {
  const handlePageChange = (pageCurrent: number) => {
    if (pageCurrent === page) return;
    onPageChange(pageCurrent, limit);
  };
  const handlePagePrevious = () => {
    if (page === 1) return;
    onPageChange(page - 1, limit);
  };
  const handlePageNext = () => {
    if (page === total) return;
    onPageChange(page + 1, limit);
  };
  return (
    <>
      <nav>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 rounded-l-lg border border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handlePagePrevious}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {Array.from({ length: total }).map((pageNumber, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={
                  index + 1 === page
                    ? 'bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  leading-tight py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              className="block py-2 px-3 ml-0 leading-tight  rounded-r-lg border text-gray-500 border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handlePageNext}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
