import * as yup from 'yup';

export const EditEntranceFormSchema = yup.object({
  number: yup
    .number()
    .typeError('Номер подъезда должен быть числом')
    .required('Номер подъезда обязателен'),
});
