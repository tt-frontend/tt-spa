import * as yup from 'yup';

export const addNonLivingPremisesSchema = yup.object({
  name: yup.string().required('Название обязательно').trim(),
  floor: yup
    .number()
    .required('Этаж обязателен')
    .integer('Этаж должен быть целым числом'),

  floorsAmount: yup
    .number()
    .required('Количество этажей обязательно')
    .integer('Количество этажей должно быть целым числом')
    .min(1, 'Количество этажей должно быть не меньше 1'),

  entrancesNumber: yup
    .array()
    .of(
      yup
        .number()
        .integer('Номер подъезда должен быть целым числом')
        .required(),
    )
    .min(1, 'Должен быть выбран хотя бы один подъезд')
    .required('Подъезды обязательны'),

  premisesAmount: yup
    .number()
    .required('Количество помещений обязательно')
    .integer('Количество помещений должно быть целым числом')
    .min(1, 'Количество помещений должно быть не меньше 1'),
});
