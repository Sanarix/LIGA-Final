import { FetchedTasks, SearchType } from 'src/types';

export interface ReduxStore {
  tasksList: {
    tasksData: FetchedTasks;
    isLoading: boolean;
  };
  errors: { value: string | null };
  search: { searchQuery: SearchType };
  pagination: { currentPage: number; currentTasks: FetchedTasks; tasksPerPage: number };
}
