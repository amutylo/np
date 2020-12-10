import React from "react";
import NewsItem from "../newsitem/NewsItem";
import "./List.css";

const List = () => {
  let items = [];
  return (
    <div className="news-wrapper">
      {items.map((item) => {
        return <NewsItem />;
      })}
    </div>
  );
};

export default List;
