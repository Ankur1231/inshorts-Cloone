import News from "../models/news.js";

export const getNews = async (req, res) => {
  try {
    const data = await News.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
