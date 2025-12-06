import React from "react";
import "./BlogPost.css";
import { Link } from "react-router-dom";

const BlogPost = ({ title, content, id }) => {
  return (
    <div className="blog-post">
      <Link
        to={`/post/${id}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <h2>{title}</h2>
      </Link>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
