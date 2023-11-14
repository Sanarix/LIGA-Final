import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ label, checked, onChange, disabled, containerClassName = '' }: CheckboxProps) {
  return (
    <div className={`form-check ${containerClassName}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        value=""
        id={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
