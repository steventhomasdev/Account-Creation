import React, { useState } from "react";
import { Container, Box, Typography, CardContent, Card } from "@mui/material";
import { useFormik } from "formik";
import { CreateAccount } from "../utils/api/Api";
import { ValidationSchema } from "../utils/ValidationSchema";
import AlertMsg from "./common/AlertMsg";
import ActionButton from "./form-elements/ActionButton";
import DatePicker from "./form-elements/DatePicker";
import FormInput from "./form-elements/FormInput";
import ValidateDate from "../utils/ValidateDate";

const Form = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");

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
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      
      const errorMessage = ValidateDate(values.day, values.month, values.year);
      if (errorMessage) {
        formik.setErrors({ ...formik.errors, day: errorMessage, month: errorMessage, year: errorMessage });
        return;
      }
  
      const status = await CreateAccount(values);
      if (status === 200) {
        setSubmissionStatus("success");
        formik.handleReset();
      }
      if (status === 400) setSubmissionStatus("error");
      setTimeout(() => {
        setSubmissionStatus("");
      }, 10000);
    },
  });

  return (
    <Container id="main-container" className="main-container">
      <AlertMsg status={submissionStatus} />

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
                label={"Password"}
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
          </Card>
          <ActionButton />
        </Box>
      </form>
    </Container>
  );
};

export default Form;
