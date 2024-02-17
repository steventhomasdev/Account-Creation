import axios from "axios";

export const CreateAccount = async (values) => {
  const { full_name, contact_number, email, password, day, month, year } =
    values;
  const url = `https://fullstack-test-navy.vercel.app/api/users/create`;

  try {
    const response = await axios.post(url, {
      full_name,
      contact_number,
      email,
      password,
      date_of_birth: `${day}${month}${year}`,
    });
    console.log(response.status)
    return response.status;
  } catch (error) {
    if (error.response) {
        console.log( error.response.status)
      return error.response.status;
    }
  }
};
