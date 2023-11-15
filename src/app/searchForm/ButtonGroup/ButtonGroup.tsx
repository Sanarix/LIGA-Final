import { memo } from 'react';
import { ButtonGroupProps } from './ButtonGroup.types';
import styles from './ButtonGroup.module.css';
import { useSearchSlice } from 'src/slices';

function ButtonGroup({ buttons }: ButtonGroupProps) {
  const { changeSearch, searchQuery, searchDispatch } = useSearchSlice();
  return (
    <div className={styles['button-group']}>
      {buttons.map((buttonText, i) => (
        <button
          key={i}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            searchDispatch(changeSearch(buttonText));
          }}
          className={
            searchQuery === buttonText
              ? `${styles['custom-button']} ${styles['custom-button_active']}`
              : styles['custom-button']
          }>
          {buttonText}
        </button>
      ))}
    </div>
  );
}

export const MemoButtonGroup = memo(ButtonGroup);
