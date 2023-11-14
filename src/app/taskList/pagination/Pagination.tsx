import { memo } from 'react';
import styles from './Pagination.module.css';
import { getTotalPages, getPageNumbers } from 'src/utils';
import { usePaginationSlice, useTasksSlice } from 'src/slices';

function Pagination() {
  const maxPageVisible = 5;
  const { tasks } = useTasksSlice();
  const { currentPage, setCurrentPage, tasksPerPage, paginationDispatch } = usePaginationSlice();
  const totalTasks = tasks.length;
  const totalPages = getTotalPages({ totalTasks, tasksPerPage });

  const pageNumbers = getPaginationButtons(totalPages, maxPageVisible, currentPage);
  const paginate = (pageNumber: number) => paginationDispatch(setCurrentPage(pageNumber));

  const disabled = {
    start: () => pageNumbers[0] === 1,
    prev: () => currentPage === 1,
    end: () => pageNumbers.slice(-1)[0] === totalPages,
    next: () => currentPage === totalPages,
  };

  function getPaginationButtons(totalPages: number, maxPageVisible = 10, currentPage = 1) {
    const pages = getPageNumbers({ totalPages, maxPageVisible, currentPage });
    return pages;
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.button} disabled={disabled.start()} onClick={() => paginate(1)}>
        Start
      </button>
      <button
        className={styles.button}
        disabled={disabled.prev()}
        onClick={() => {
          paginate(currentPage - 1);
        }}>
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          className={currentPage === number ? `${styles.button} ${styles['button_active']}` : styles.button}
          key={number}
          onClick={() => {
            paginate(number);
          }}>
          {number}
        </button>
      ))}
      <button
        className={styles.button}
        disabled={disabled.next()}
        onClick={() => {
          paginate(currentPage + 1);
        }}>
        Next
      </button>
      <button className={styles.button} disabled={disabled.end()} onClick={() => paginate(totalPages)}>
        End
      </button>
    </div>
  );
}

export const MemoPagination = memo(Pagination);
