export interface PagingPropsI {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
