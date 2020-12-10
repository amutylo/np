import React from "react";
import "./NewsItem.css";
import { v4 as uuid } from "uuid";
import NewsTag from "../../atoms/newstag/NewsTag";
import Image from "../../atoms/image/Image";
import defaultViewsImage from "../../assets/default_views.png";
import DateHtml from "../../atoms/datehtml/DateHeml";
import propTypes from "prop-types";

const NewsItem = (props) => {
  return (
    <div
      className={`col ${props.isMostPopular ? "popular" : null}`}
      key={uuid()}
    >
      <div className="news-item">
        <a href={`/app/news${props.url}`} className="img-link">
          <div className="field__item">
            {
              <Image
                imageData={{
                  src: props.image.url ? props.image.url : defaultViewsImage,
                  width: props.image.width ? props.image.width : "480",
                  height: props.image.height ? props.image.height : "320",
                  alt: props.title ? props.title : "default alt",
                  title: props.title ? props.title : "default title",
                }}
                type="list"
              />
            }
          </div>
        </a>
        <div className="description">
          <a href={`/app/news${props.url}`} className="img-link">
            <h2 className="header">
              <span>{props.title}</span>
            </h2>
          </a>
          <div className="list">
            <div className="categories">
              <NewsTag iconClass="icon" tags={props.tags} />
            </div>
            <DateHtml date={props.date} />
          </div>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  isMostPopular: propTypes.bool,
  isDetailPage: propTypes.bool,
  title: propTypes.string,
  tags: propTypes.array,
  date: propTypes.instanceOf(Date),
};

export default NewsItem;
