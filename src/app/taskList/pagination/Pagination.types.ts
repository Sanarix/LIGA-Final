export type PaginationProps = {
  totalTasks: number;
  tasksPerPage: number;
  currentPage: number;
  paginate: (value: number) => void;
};
