import * as Yup from 'yup';

export const mobileNumberValidation = Yup.object().shape({
  mobile: Yup.string().required()
    .label('Phone number')
    .matches(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, 'Invalid phone number format, must start with 05** without country code')
})

export const addressValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email address is required').email('Email address is not valid'),
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('First name is required'),
  telephone: Yup.string().required()
    .label('Phone number')
    .max(12)
    .matches(/^(9665)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, 'Invalid phone number format, must start with 9665**'),
  region_id:Yup.string().required('Select region is required'),
  city:Yup.string().required('Select city is required')
})