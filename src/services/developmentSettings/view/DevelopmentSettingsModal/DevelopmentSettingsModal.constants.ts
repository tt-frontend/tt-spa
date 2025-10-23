import * as yup from 'yup';

export const urls = [
  'https://stage.k8s.transparent-technology.ru/api/',
  'http://localhost:5001/api/',
  'https://fop.k8s.transparent-technology.ru/api/',
];

export const RoleSchema = yup.object({
  key: yup.string().required(),
  value: yup.string().required(),
});

export const StatusSchema = yup.object({
  title: yup.string().required(),
  type: yup.string().required(),
  startDate: yup.string().nullable().required(),
  endDate: yup.string().nullable(),
});

export const UserSchema = yup.object({
  id: yup.number().required(),
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  middleName: yup.string().nullable().defined(), // может быть ""
  cellphone: yup.string().nullable().defined(), // может быть ""
  department: yup.string().nullable(),
  position: yup.string().nullable(),
  number: yup.string().nullable(),
  profilePhoto: yup.string().nullable(),
  hireDate: yup.string().nullable(),
  dismissalDate: yup.string().nullable(),
  suspendedFromDate: yup.string().nullable(),
  status: StatusSchema.required(),
  competences: yup.array().of(yup.mixed()).required(),
  roles: yup.array().of(RoleSchema).required(),
  buildings: yup.array().of(yup.mixed()).required(),
});

export const AccountSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .strict(true)
    .typeError('Password must be a string')
    .required(),
  user: UserSchema.required(),
});

export const AccountsArraySchema = yup.array().of(AccountSchema).required();
