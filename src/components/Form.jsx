import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import DatePicker from "./DatePicker";
import FormInput from "./FormInput";
import SimpleBottomNavigation from "./MobileBottomNav";

const Form = () => {
  return (
    <Container id="main-container" className="main-container">
      <Box className="form-container">
        <Typography className="typography-header">
          Create User Account
        </Typography>

        <Card className="card">
          <CardContent className="card-content">
            <FormInput label={"Full Name"} type={"text"} required={true}/>
            <FormInput label={"Contact Number"} type={"tel"} required={true}/>
            <DatePicker required={true}/>
            <FormInput label={"Email Address"} type={"email"} required={true}/>
            <FormInput label={"Password"} type={"text"} required={true}/>
            <FormInput label={"Confirm Password"} type={"text"} required={true}/>
          </CardContent>
        </Card>

        <Box className="btn-container">
          <Button className="btn outline">Cancel</Button>
          <Button className="btn filled" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
