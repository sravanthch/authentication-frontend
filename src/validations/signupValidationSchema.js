
import * as Yup from 'yup';

const signupValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
});

export default signupValidationSchema;
