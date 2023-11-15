type Props = {
  totalTasks: number;
  tasksPerPage: number;
};

export function getTotalPages({ totalTasks, tasksPerPage }: Props): number {
  const result = [];
  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    result.push(i);
  }
  return result.length;
}
