import { FormControl, TextField, Typography } from "@mui/material";

const FormInput = ({ label, type, required, value, onChange, onBlur, error, helperText, name }) => {
  return (
    <FormControl className="input-form-control">
      <Typography className="typography-label">{label}</Typography>
      <TextField
        className="input-field star-label"
        label={label}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        />
    </FormControl>
  );
};

export default FormInput;
