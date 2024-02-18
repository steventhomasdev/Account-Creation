import axios from "axios";

export const PostData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
};
