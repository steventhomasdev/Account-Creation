import axios from "axios";

// import { PostData } from "../utils/Api";
import { api } from "../constants/Constants";

export const RegisterUser = async (values) => {
    const { full_name, contact_number, email, password, day, month, year } = values;
    const url = api.user.register;
    const data = {
      full_name,
      contact_number,
      email,
      password,
      date_of_birth: `${day}${month}${year}`,
    };
  
    // const response = await PostData(url, data);

    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  };