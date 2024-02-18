import { PostData } from "../../utils/Api";

export const CreateAccount = async (values) => {
    const { full_name, contact_number, email, password, day, month, year } = values;
    const url = `https://fullstack-test-navy.vercel.app/api/users/create`;
    const data = {
      full_name,
      contact_number,
      email,
      password,
      date_of_birth: `${day}${month}${year}`,
    };
  
    return PostData(url, data);
  };