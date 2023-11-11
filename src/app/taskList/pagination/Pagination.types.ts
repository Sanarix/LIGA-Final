export type PaginationProps = {
  tasksPerPage: number;
  totalTasks: number;
  paginate: (number: number) => void;
};
