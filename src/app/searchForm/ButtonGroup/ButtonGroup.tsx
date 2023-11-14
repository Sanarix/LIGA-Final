import { memo } from 'react';
import { ButtonGroupProps } from './ButtonGroup.types';
import styles from './ButtonGroup.module.css';
import { useSearchSlice } from 'src/slices/search/search.hooks';

function ButtonGroup({ buttons }: ButtonGroupProps) {
  const { changeSearch, searchQuery, searchDispatch } = useSearchSlice();
  return (
    <>
      {buttons.map((buttonText, i) => (
        <button
          key={i}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            searchDispatch(changeSearch(buttonText));
          }}
          className={searchQuery === buttonText ? `${styles.customButton} ${styles.active}` : styles.customButton}>
          {buttonText}
        </button>
      ))}
    </>
  );
}

export const MemoButtonGroup = memo(ButtonGroup);
