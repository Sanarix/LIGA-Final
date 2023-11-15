import { TaskProps } from './Task.types';
import style from './Task.module.css';

export function Task({ children }: TaskProps) {
  return <div className={style.task}>{children}</div>;
}
