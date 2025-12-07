import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";

import Footer from "../components/Footer.jsx";
import "./PostPage.css";
import { FaEdit } from "react-icons/fa";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/postpage/${id}/`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch post");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "200px" }}>Loading post...</p>
    );
  if (error)
    return (
      <p style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
        {error}
      </p>
    );
  if (!post)
    return (
      <p style={{ textAlign: "center", marginTop: "200px" }}>Post not found.</p>
    );

  return (
    <div className="postpage-wrapper">
      <NavBar />

      <div className="postpage-center">
        <main className="postpage-main">
          <h1 className="postpage-title">{post.title}</h1>
          <p className="postpage-content">{post.content}</p>
        </main>
        <div>
          <FaEdit />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostPage;
