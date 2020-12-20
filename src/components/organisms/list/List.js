import React, { useEffect } from "react";
import { getHomeFeed } from "../../../logic/Api";
import NewsItem from "../newsitem/NewsItem";
import "./List.css";
import { getHomeFeedCategories } from "../../../logic/Api";

const List = () => {
  let items = [];

  useEffect(() => {
    // const categories = getHomeFeedCategories(this.props.categories);
  }, []);

  return (
    <div className="news-wrapper">
      {items.map((item) => {
        return <NewsItem />;
      })}
    </div>
  );
};

export default List;
