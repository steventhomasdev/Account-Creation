import React, { useState } from "react";
import * as yup from "yup";
import {
  Container,
  Box,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import { useFormik } from "formik";
import { registerUserValidationSchema } from "./Schema";
import AlertMsg from "../../common/AlertMsg";
import DatePicker from "../../common/form-elements/DatePicker";
import FormInput from "../../common/form-elements/FormInput";
import { ValidDate, IsFutureDate } from "../../../utils/ValidateDate";
import { RegisterUser } from "../../../api_service/RegisterUser";
import ActionButtons from "../../common/form-elements/ActionButtons";
import BackDrop from "../../common/BackDrop";

const Register = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(loading)

  const handleSubmit = async (values) => {
    const validDate = ValidDate(values.day, values.month, values.year);
    const futureDate = IsFutureDate(values.day, values.month, values.year);

    if (!validDate || futureDate) {
      formik.setErrors({
        ...formik.errors,
        day:
          !validDate &&
          "The day you entered is not valid for the selected month and year",
        month: futureDate && "Birthdate cannot be in the future",
      });
      return;
    }

    const status = await RegisterUser(values);

    setLoading(false);
    if (status === 200) {
      setSubmissionStatus("success");
      setAlertMessage("User account successfully created.");
      formik.handleReset();
    }
    if (status === 400) {
      setSubmissionStatus("error");
      setAlertMessage("There was an error creating the account.");
    }
    setTimeout(() => {
      setSubmissionStatus("");
      setAlertMessage("");
    }, 5000);
  };

  const formik = useFormik({
    initialValues: {
      full_name: "",
      contact_number: "",
      email: "",
      password: "",
      confirm_password: "",
      day: "",
      month: "",
      year: "",
    },
    validationSchema: yup.object(registerUserValidationSchema),
    onSubmit: handleSubmit,
  });

  return (
    <Container id="main-container" className="main-container">
      {submissionStatus !== "" && (
        <AlertMsg status={submissionStatus} message={alertMessage} />
      )}

      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Box className="form-container">
          <Typography className="typography-header">
            Create User Account
          </Typography>
          <Card className="card">
            <CardContent className="card-content">
              <FormInput
                label="Full Name"
                type="text"
                name="full_name"
                required={true}
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.full_name && Boolean(formik.errors.full_name)
                }
                helperText={formik.touched.full_name && formik.errors.full_name}
              />
              <FormInput
                label={"Contact Number"}
                type={"text"}
                name="contact_number"
                required={true}
                value={formik.values.contact_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.contact_number &&
                  Boolean(formik.errors.contact_number)
                }
                helperText={
                  formik.touched.contact_number && formik.errors.contact_number
                }
              />
              <DatePicker formik={formik} />
              <FormInput
                label={"Email Address"}
                type={"email"}
                required={true}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <FormInput
                heading="Password"
                label="Create Password"
                type={"password"}
                required={true}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <FormInput
                label={"Confirm Password"}
                type={"password"}
                required={true}
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirm_password &&
                  Boolean(formik.errors.confirm_password)
                }
                helperText={
                  formik.touched.confirm_password &&
                  formik.errors.confirm_password
                }
              />
            </CardContent>
            <BackDrop loading={loading} color={"#fff"}/> 
          </Card>
          <ActionButtons setLoading={setLoading} />
        </Box>
      </form>
    </Container>
  );
};

export default Register;
