import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";
import "./NewsTag.css";

const NewsTag = (props) => {
  const PUBLIC_URL =
    process.env.NODE_ENV === "development" ? "/app" : process.env.PUBLIC_URL;
  return (
    <div>
      {props.tags &&
        props.tags.map((tag) => {
          return (
            <Fragment key={uuid()}>
              {!props.isDetailPage ? (
                <i
                  className={`fa fa-tag ${props.iconClass}`}
                  aria-hidden="true"
                />
              ) : null}
              <div className="tag">
                <a
                  href={`${PUBLIC_URL}/category${tag.entity.entityUrl.path}`}
                  className={props.isDetailPage ? "category-block-view" : null}
                  hrefLang="en"
                >
                  {tag.entity.name}
                </a>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default NewsTag;
