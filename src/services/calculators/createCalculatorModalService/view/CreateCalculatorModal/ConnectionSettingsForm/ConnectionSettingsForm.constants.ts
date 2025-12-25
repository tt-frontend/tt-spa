import * as Yup from 'yup';

export const validationSchema = Yup.object({
  isConnected: Yup.boolean().required(),

  ipV4: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('IP обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),

  port: Yup.number().when('isConnected', {
    is: true,
    then: (schema) => schema.required('Порт обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),

  deviceAddress: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('Адрес устройства обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),

  providerName: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('Провайдер обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),

  modemModel: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('Модель модема обязательна'),
    otherwise: (schema) => schema.notRequired(),
  }),

  modemNumber: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('Номер модема обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),

  simNumber: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('Номер SIM обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),

  simImei: Yup.string().when('isConnected', {
    is: true,
    then: (schema) => schema.required('IMEI обязателен'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
