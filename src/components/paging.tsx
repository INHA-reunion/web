import React from "react";
import { PagingPropsI } from "@/types/pagePropsI";

const Paging: React.FC<PagingPropsI> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="text-center mt-4">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
      >
        이전
      </button>
      <span className="text-gray-800">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2"
      >
        다음
      </button>
    </div>
  );
};

export default Paging;
