import * as yup from 'yup';

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'name must be at least 2 characters'),
  size: yup
    .string()
    .required('Size is required'),
  toppings: yup.array().of(yup.string()),
  notes: yup
    .string(),
});

export default FormSchema;