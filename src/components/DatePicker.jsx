import MenuItem from "@mui/material/MenuItem";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DatePicker = ({ required }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <FormControl className="input-form-control">
      <Typography className="typography-label">Birthdate</Typography>
      <Container disableGutters className="container-row">
        <FormControl sx={{ flex: 1 }} required>
          <InputLabel className="star-label date-picker">Day</InputLabel>
          <Select
            className="input-field"
            value={day}
            onChange={handleDayChange}
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
            value={month}
            onChange={handleMonthChange}
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
            value={year}
            onChange={handleYearChange}
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
