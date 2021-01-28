import * as Yup from 'yup';

const contactSchema = Yup.object({
  name: Yup.string().required('Name is Required').min(3),
  email: Yup.string()
    .required('Email is Required')
    .email('Invalid Email Address'),
  subject: Yup.string().required('Subject is Required'),
  message: Yup.string().required('Message is Required'),
});

export default {
  contactSchema,
};
