import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
const PostItem = ({
  postID,
  category,
  title,
  description,
  authorID,
  thumbnail,
}) => {
  return (
    <Link to={`/posts/${postID}`}>
      <article className="post">
        <div className="post__thumbnail">
          <img src={thumbnail} alt={title}></img>
        </div>
        <div className="post__content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="post__footer">
            <PostAuthor />
            <Link to={`/posts/categories/${category}`} className="category__badge">{category}</Link>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
