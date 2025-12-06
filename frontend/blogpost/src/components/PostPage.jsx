import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header.jsx";

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
      .catch((err) => {
        console.log(err);
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
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <main
          style={{
            maxWidth: "800px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            padding: "40px 30px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#333", marginBottom: "20px" }}>{post.title}</h1>
          <p
            style={{ lineHeight: "1.7", color: "#555", whiteSpace: "pre-line" }}
          >
            {post.content}
          </p>
        </main>
      </div>
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#777",
          backgroundColor: "#f4f4f4",
        }}
      >
        © 2025 My Blog Site
      </footer>
    </div>
  );
};

export default PostPage;
