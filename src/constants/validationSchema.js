import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  companyName: Yup.string(),
  licenseNumber: Yup.string(),
  businessType: Yup.string(),
  services: Yup.string(),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  additionalInformation: Yup.string(),
});
