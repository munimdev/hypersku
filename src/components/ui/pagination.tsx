import { useAtom } from "jotai";
import { paginationAtom } from "@/store/atoms";

const Pagination = () => {
  const [pagination, setPagination] = useAtom(paginationAtom);

  const changePage = (newPage: number) => {
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  const prevPage = () => {
    if (pagination.hasPrevPage)
      setPagination({
        ...pagination,
        page: pagination.page - 1,
      });
  };

  const nextPage = () => {
    if (pagination.hasNextPage)
      setPagination({
        ...pagination,
        page: pagination.page + 1,
      });
  };

  const getPages = () => {
    let pages = [
      pagination.page - 2,
      pagination.page - 1,
      pagination.page,
      pagination.page + 1,
      pagination.page + 2,
    ].filter((p) => p > 0 && p <= pagination.totalPages); // Adjust this to your own needs
    return pages;
  };

  return (
    <nav aria-label="Page navigation example" className="mx-auto">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={prevPage}
            className="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {getPages().map((p, index) => (
          <li key={index}>
            <button
              onClick={() => changePage(p)}
              className={`flex items-center justify-center h-8 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                p === pagination.page
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-500 bg-white"
              }`}
            >
              {p}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
