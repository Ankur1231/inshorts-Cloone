import React, { useEffect, useState } from "react";

//components
import { getNews } from "../services/Api";
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const news = await getNews();
      setNews(news.data);
    };
    getData();
  }, []);

  console.log(news);

  return (
    <div>
      {news.length > 0 && news.map((article) => <Article article={article} />)}
    </div>
  );
};

export default Articles;
