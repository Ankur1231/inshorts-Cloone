import axios from "axios";

export const getNews = async () => {
  try {
    const res = await axios.get("http://localhost:8000/news");
    return res;
  } catch (error) {
    console.log("Error while calling getNews api", error);
  }
};
