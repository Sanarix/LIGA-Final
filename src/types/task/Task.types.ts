import { paths } from 'types/api/api';

//Для отправки get запроса
export type Task = Required<paths['/tasks']['get']>['parameters']['query'];

//это для отправки get запроса с id
export type TaskById = Required<paths['/tasks/{taskId}']['get']>['parameters']['path'];

//это для отправки post запроса
export type AddTaskType = Required<paths['/tasks']['post']>['requestBody']['content']['application/json'];

//'это для отправки patch  запроса
export type ChangeTaskType =
  | Required<paths['/tasks/{taskId}']['patch']>['requestBody']['content']['application/json'] & { id: string };

//это для отпраки delete запроса
export type DeletedId = Required<paths['/tasks/{taskId}']['delete']>['parameters']['path'];

//это ответ получаемый на запрос get
export type FetchedTasks = Required<paths['/tasks']['get']['responses']['200']['content']>['application/json'];
