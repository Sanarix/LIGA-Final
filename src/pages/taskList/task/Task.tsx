import { TaskProps } from './Task.types';

export function Task({ children }: TaskProps) {
  return <div className="task">{children}</div>;
}
