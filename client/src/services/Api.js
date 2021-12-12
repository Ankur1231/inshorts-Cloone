import axios from "axios";

export const getNews = async (page, size = 5) => {
  try {
    const res = await axios.get(`http://localhost:8000/news?page=${page}&size=${size}`);
    return res;
  } catch (error) {
    console.log("Error while calling getNews api", error);
  }
};
