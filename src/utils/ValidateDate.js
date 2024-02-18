import moment from "moment";

export const ValidDate = (day, month, year) => {
  const selectedDate = moment([year, month - 1, day]);

  return selectedDate.isValid();
};

export const IsFutureDate = (day, month, year) => {
  const selectedDate = moment([year, month - 1, day]);
  const currentDate = moment().startOf("day");

  return selectedDate.isAfter(currentDate);
};
