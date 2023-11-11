import { PaginationProps } from './Pagination.types';

export default function Pagination({ tasksPerPage, totalTasks, paginate }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li className="page-item" key={number} onClick={() => paginate(number)}>
          {number}
        </li>
      ))}
    </ul>
  );
}
