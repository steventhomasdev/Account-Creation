import { FormControl, TextField, Typography } from "@mui/material";

const FormInput = ({ label, type, required }) => {
  return (
    <FormControl className="input-form-control">
      <Typography className="typography-label">{label}</Typography>
      <TextField
        className="input-field star-label"
        label={label}
        type={type}
        required={required}
      />
    </FormControl>
  );
};

export default FormInput;
