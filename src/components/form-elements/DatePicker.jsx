import MenuItem from "@mui/material/MenuItem";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import moment from "moment";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  Typography,
  FormHelperText,
} from "@mui/material";

const DatePicker = ({ formik }) => {
  const year = moment().year();

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
            IconComponent={ExpandMoreOutlinedIcon}
          >
            <MenuItem value=""></MenuItem>
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
            IconComponent={ExpandMoreOutlinedIcon}
          >
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month, i) => (
              <MenuItem key={i} value={i + 1}>
                {month}
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
            IconComponent={ExpandMoreOutlinedIcon}
          >
            {[...Array(101)].map((_, i) => (
              <MenuItem key={i} value={year - i}>
                {year - i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
      {formik.touched.day && formik.errors.day ? (
        <FormHelperText error>{formik.errors.day}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default DatePicker;
