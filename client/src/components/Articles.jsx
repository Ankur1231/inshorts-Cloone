import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//components
import { getNews } from "../services/Api";
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await getNews(page);
      setNews([...news, ...response.data]);
    };
    getData();
  }, [page]);

  console.log(news);

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => {
        setPage((page) => page + 1);
      }}
      hasMore={true}
    >
      {news.length > 0 && news.map((article) => <Article article={article} />)}
    </InfiniteScroll>
  );
};

export default Articles;
