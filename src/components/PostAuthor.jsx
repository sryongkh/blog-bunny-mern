import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../image/author-1.png";
const PostAuthor = () => {
  return (
    <>
      <Link to={`/posts/user/lorem`} className="post__author">
        <div className="post__author-avatar">
          <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
          <h5>By: Sam Sam</h5>
          <small>Just Now</small>
        </div>
      </Link>
    </>
  );
};

export default PostAuthor;
