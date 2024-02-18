import * as yup from "yup";
import moment from "moment";
import { isValidNumber } from "libphonenumber-js";

export const registerUserValidationSchema = {
  full_name: yup
    .string("Enter your Full Name")
    .required("Name is required")
    .matches(
      /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/,
      "Name can only contain letters and spaces"
    )
    .min(1, "Name cannot be empty"),
  contact_number: yup
    .string("Enter your contact number")
    .required("Contact number is required")
    .test("Is Canadian", "Please enter a Canadian contact number", (value) => {
      return isValidNumber(value, "CA");
    }),
  email: yup
    .string("Enter your email address")
    .required("Email address is required")
    .email("Sorry, this email address is not valid. Please try again."),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])?[a-zA-Z0-9!@#%&]*$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special symbol"
    ),
  confirm_password: yup
    .string("Confirm your password")
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  day: yup
    .number("Day must be a number")
    .required("Day is required")
    .min(1, "Day must be between 1 and 31")
    .max(31, "Day must be between 1 and 31"),
  month: yup
    .number("Month must be a number")
    .required("Month is required")
    .min(1, "Month must be between 1 and 12")
    .max(12, "Month must be between 1 and 12"),
  year: yup
    .number("Year must be a number")
    .required("Year is required")
    .max(moment().year(), "Year must be a past date"),
};
