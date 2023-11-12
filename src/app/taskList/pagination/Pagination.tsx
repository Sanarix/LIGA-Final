import styles from './Pagination.module.css';
import { PaginationProps } from './Pagination.types';
import { getTotalPages, getPageNumbers } from 'utils/pagination';

export function Pagination({ totalTasks, tasksPerPage, currentPage, paginate }: PaginationProps) {
  const totalPages = getTotalPages({ totalTasks, tasksPerPage });
  const maxPageVisible = 5;
  const pageNumbers = getPaginationButtons(totalPages, maxPageVisible);
  const disabled = {
    start: () => pageNumbers[0] === 1,
    prev: () => currentPage === 1,
    end: () => pageNumbers.slice(-1)[0] === 1,
    next: () => currentPage === totalPages,
  };

  function getPaginationButtons(totalPages: number, maxPageVisible = 10, currentPage = 1) {
    const pages = getPageNumbers({ totalPages, maxPageVisible, currentPage });
    return pages;
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.button} disabled={disabled.start()}>
        Start
      </button>
      <button className={styles.button} disabled={disabled.prev()}>
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          className={currentPage === number ? `${styles.button} ${styles['button_active']}` : styles.button}
          key={number}
          onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
      <button className={styles.button} disabled={disabled.next()}>
        Next
      </button>
      <button className={styles.button} disabled={disabled.end()}>
        End
      </button>
    </div>
  );
}
