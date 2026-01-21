import * as yup from 'yup';

export const AddEntranceFormSchema = yup.object({
  apartmentsPerFloorAmount: yup
    .number()
    .typeError('Количество квартир на этаже должно быть числом')
    .integer('Количество квартир на этаже должно быть целым числом')
    .positive('Количество квартир на этаже должно быть положительным')
    .required('Количество квартир на этаже обязательно'),
});
