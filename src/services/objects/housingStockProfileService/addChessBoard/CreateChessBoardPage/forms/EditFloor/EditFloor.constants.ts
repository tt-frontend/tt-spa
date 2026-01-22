import * as yup from 'yup';

export const EditFloorFormSchema = yup.object({
  number: yup
    .number()
    .typeError('Номер этажа должен быть числом')
    .required('Номер этажа обязателен'),
});
