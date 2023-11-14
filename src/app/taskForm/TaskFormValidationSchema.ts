import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  taskName: Yup.string().required('Required field').min(1, 'Taskname must be at least min 1 charactrer'),
  info: Yup.string().required('Required field').min(1, 'sdf').max(250, 'Info must not exceed 250 characters'),
});
