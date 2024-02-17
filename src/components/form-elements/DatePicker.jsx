import MenuItem from "@mui/material/MenuItem";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";

const DatePicker = ({ formik }) => {
  return (
    <FormControl className="input-form-control">
      <Typography className="typography-label">Birthdate</Typography>
      <Container disableGutters className="container-row">
        <FormControl sx={{ flex: 1 }} required>
          <InputLabel className="star-label date-picker">Day</InputLabel>
          <Select
            className="input-field"
            name="day"
            label="day"
            value={formik.values.day}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.day && Boolean(formik.errors.day)}
          >
            {[...Array(31)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ flex: 1 }} required>
          <InputLabel className="star-label date-picker">Month</InputLabel>
          <Select
            className="input-field"
            name="month"
            label="month"
            value={formik.values.month}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.month && Boolean(formik.errors.month)}
          >
            {[...Array(12)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ flex: 1 }} required>
          <InputLabel className="star-label date-picker">Year</InputLabel>
          <Select
            className="input-field"
            name="year"
            label="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.year && Boolean(formik.errors.year)}
          >
            {[...Array(101)].map((_, i) => (
              <MenuItem key={i} value={2024 - i}>
                {2024 - i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </FormControl>
  );
};

export default DatePicker;
