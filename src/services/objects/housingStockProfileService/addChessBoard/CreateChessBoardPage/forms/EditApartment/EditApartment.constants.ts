import * as yup from 'yup';

export const EditApartmentSchema = yup.object({
  number: yup
    .string()
    .typeError('Номер квартиры должен быть строкой')
    .required('Номер квартиры обязателен'),
});
