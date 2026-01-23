import * as yup from 'yup';

export const addParkingSchema = yup.object({
  name: yup.string().required('Name is required').trim(),
  floor: yup
    .number()
    .required('Floor is required')
    .integer('Floor must be an integer'),

  floorsAmount: yup
    .number()
    .required('Floors amount is required')
    .integer('Floors amount must be an integer')
    .min(1, 'Floors amount must be at least 1'),

  entrancesNumber: yup
    .array()
    .of(yup.number().integer('Entrance number must be an integer').required())
    .min(1, 'At least one entrance must be selected')
    .required('Entrances are required'),
});
