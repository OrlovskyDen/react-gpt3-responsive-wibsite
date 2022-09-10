import React from "react";
import styles from "./Article.css";

function Article({ imgUrl, date, title }) {
  return (
    <div className="wl__blog-container_article">
      <div className="wl__blog-container_article-image">
        <img src={imgUrl} alt="Blog image" />
      </div>
      <div className="wl__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
