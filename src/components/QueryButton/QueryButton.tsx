import { QueryButtonParams } from './QueryButton.types';
import styles from './QueryButton.module.css';

export function QueryButton({ buttonText, onClick }: QueryButtonParams) {
  return (
    <button
      className={styles['btn-query']}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}>
      {buttonText}
    </button>
  );
}
