import axios from "axios";

const ACCESS_KEY = "YrrY7oUQRL4XwFRzv_O168XIL6UyJJUQSW081FjxmAM";
axios.defaults.baseURL = `https://api.unsplash.com/search`;

export const getImages = async (value, page) => {
  // value and page we will get from App statesß
  const response = await axios.get(`photos`, {
    params: {
      page,
      query: value,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data.results; // Give back array of elements
};
