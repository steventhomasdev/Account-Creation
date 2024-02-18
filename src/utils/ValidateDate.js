import moment from "moment";

const ValidateDate = (day, month, year) => {
  const selectedDate = moment([year, month - 1, day]);
  const currentDate = moment().startOf("day");
  
  if (!selectedDate.isValid()) {
    return "The day you entered is not valid for the selected month and year";
  }

  if (selectedDate.isAfter(currentDate)) {
    return "Birthdate cannot be in the future";
  }
  return null;
};

export default ValidateDate;
