import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  taskName: Yup.string().required('Required field').min(1, 'Task name must be at least min 1 charactrer'),
  info: Yup.string().required('Required field').min(1, 'sdf').max(50, 'Info must not exceed 50 characters'),
});
